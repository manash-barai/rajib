import { connectToDB } from "@/lib/mongodb";
import { deleteImage } from "@/lib/upload-image";
import FeedBack from "@/models/FeedBack";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDB();
    const body = await req.json();
    
    const newProduct = new FeedBack(body);
    const saveFeedback = await newProduct.save();
    
    return NextResponse.json({
      message: 'done',
      data: saveFeedback,
    }, { status: 201 });
  } catch (error) {
    console.error('Error creating product:', error);
    return NextResponse.json({
      error: 'Error creating product',
    }, { status: 500 });
  }
};

export const GET = async (req) => {
  try {
    await connectToDB();
    
    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10); // Default to page 1
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to limit 10
    const skip = (page - 1) * limit;
    
    const totalProducts = await FeedBack.countDocuments();
    
    // If the requested page exceeds the total number of pages, return an empty array or an error message
    if (skip >= totalProducts) {
      return NextResponse.json({
        message: `No products found for page ${page}.`,
        products: [],
      }, { status: 200 });
    }
    
    const feedBack = await FeedBack.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ feedBack }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({
      error: 'Error fetching products',
    }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    await connectToDB();
    
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id"); // Extract product ID from URL
    
    if (!productId) {
      return NextResponse.json({
        error: 'Product ID is required',
      }, { status: 400 });
    }
    
    // Find the product to get image public IDs
    const feedback = await FeedBack.findById(productId);
    
    if (!feedback) {
      return NextResponse.json({
        error: 'Product not found',
      }, { status: 404 });
    }
    
    const { image } = feedback;
    
    // Delete images from Cloudinary
    if (image?.public_id && image.public_id !== "") {
      await deleteImage(image.public_id);
    }
    
    // Delete the product from the database
    await FeedBack.findByIdAndDelete(productId);
    
    return NextResponse.json({
      message: 'Feed back deleted successfully',
    }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({
      error: 'Error deleting product',
    }, { status: 500 });
  }
};

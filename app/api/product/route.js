import { connectToDB } from "@/lib/mongodb";
import { deleteImage } from "@/lib/upload-image";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    await connectToDB();
    const body = await req.json();
    
    const newProduct = new Product(body);
    await newProduct.save();
    
    return NextResponse.json({
      message: 'Product created successfully',
      product: newProduct,
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
    
    const totalProducts = await Product.countDocuments(); // Total number of products in the database
    
    // If the requested page exceeds the total number of pages, return an empty array or an error message
    if (skip >= totalProducts) {
      return NextResponse.json({
        message: `No products found for page ${page}.`,
        products: [],
      }, { status: 200 });
    }
    
    const products = await Product.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });
    
    return NextResponse.json({ products }, { status: 200 });
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
    const product = await Product.findById(productId);
    
    if (!product) {
      return NextResponse.json({
        error: 'Product not found',
      }, { status: 404 });
    }
    
    const { image1, image2, image3, image4 } = product;
    
    // Delete images from Cloudinary
    if (image1?.public_id && image1.public_id !== "") {
      await deleteImage(image1.public_id);
    }
    if (image2?.public_id && image2.public_id !== "") {
      await deleteImage(image2.public_id);
    }
    if (image3?.public_id && image3.public_id !== "") {
      await deleteImage(image3.public_id);
    }
    if (image4?.public_id && image4.public_id !== "") {
      await deleteImage(image4.public_id);
    }
    
    // Delete the product from the database
    await Product.findByIdAndDelete(productId);
    
    return NextResponse.json({
      message: 'Product deleted successfully',
    }, { status: 200 });
  } catch (error) {
    console.error('Error deleting product:', error);
    return NextResponse.json({
      error: 'Error deleting product',
    }, { status: 500 });
  }
};

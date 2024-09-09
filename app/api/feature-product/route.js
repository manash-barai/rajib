import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page") || "1", 10); 
    const limit = parseInt(searchParams.get("limit") || "10", 10); // Default to limit 10
    const skip = (page - 1) * limit;

    const totalFeatureProducts = await Product.countDocuments({ 'featureProduct': true }); // Total number of products in the database

    // If the requested page exceeds the total number of pages, return an empty array or an error message
    if (skip >= totalFeatureProducts) {
      return NextResponse.json({
        message: `No products found for page ${page}.`,
        products: [],
      }, { status: 200 });
    }

    const featureProduct = await Product.find({ 'featureProduct': true })
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    return NextResponse.json({ featureProduct }, { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return NextResponse.json({
      error: 'Error fetching products',
    }, { status: 500 });
  }
};

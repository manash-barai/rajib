import { connectToDB } from "@/lib/mongodb";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    await connectToDB();
    
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    
    const singleProduct = await Product.findById(id);
    
    return NextResponse.json({ singleProduct }, { status: 200 });
  } catch (error) {
    console.error('Error fetching product:', error);
    return NextResponse.json({
      error: 'Error fetching product',
    }, { status: 500 });
  }
};

import { deleteImage, uploadImage } from "@/lib/upload-image";
import { NextResponse } from "next/server";

export const POST = async (req) => {
  try {
    const formData = await req.formData();
    const image = formData.get("image");

    const data = await uploadImage(image, "nextjs-imagegallary");
    console.log(data);

    return NextResponse.json({
      url: data?.secure_url,
      public_id: data?.public_id
    }, { status: 200 });
  } catch (error) {
    console.error('Error uploading image:', error);
    return NextResponse.json({ error: 'Error uploading image' }, { status: 500 });
  }
};

export const DELETE = async (req) => {
  try {
    const { public_id } = await req.json();

    if (!public_id) {
      return NextResponse.json({ error: 'Public ID is required.' }, { status: 400 });
    }

    const result = await deleteImage(public_id);

    return NextResponse.json(result, { status: 200 });
  } catch (error) {
    console.error('Error deleting image:', error);
    return NextResponse.json({ error: 'Error deleting image' }, { status: 500 });
  }
};

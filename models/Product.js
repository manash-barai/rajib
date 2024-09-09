// src/models/Product.ts
import mongoose, { Schema, models, model } from 'mongoose';


const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String },
    newPrice: { type: Number },
    oldPrice: { type: Number },
    extraOffer: { type: String, required: false },
    featureProduct: { type: Boolean, default: false },

    image1: {
      url: String,
      public_id: String
    },
    image2: {
      url: String,
      public_id: String
    },
   
    image3: {
      url: String,
      public_id: String
    },
    image4: {
      url: String,
      public_id: String
    },
    

    brand: { type: String },
    country: { type: String },
    lifeCycle: { type: String }
  },
  { timestamps: true }
);

const Product = models.Product || model('Product', ProductSchema);
export default Product;
// src/models/User.ts
import mongoose, { Schema, models, model } from 'mongoose';


const FeedBackSchema = new Schema(
    {
        name: { type: String, required: true },
        image: { url: String, public_id: String },
        description: String
    },
    { timestamps: true }
);

const FeedBack = models.FeedBack || model('FeedBack', FeedBackSchema);
export default FeedBack;
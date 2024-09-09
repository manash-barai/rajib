// src/models/User.ts
import mongoose, { Schema, models, model } from 'mongoose';


const UserSchema = new Schema(
  {
   
    phoneNumber: { type: String },
    otpVerificationBySMS: { type: String },
    verified:{type:Boolean,default:false},
    order: [{ type: Schema.Types.ObjectId, ref: 'Order' }],
   
  },
  { timestamps: true }
);

const User = models.User || model('User', UserSchema);
export default User;
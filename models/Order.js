// src/models/Order.ts
import mongoose, { Schema, models, model } from 'mongoose';


const OrderSchema = new Schema(
  {
    orderId: { type: Number },
    productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
    
    status: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    whatsAppOtp: {
      default: { type: String, default: '0000' },
      address: {
        name: { type: String, required: true },
        phoneNumber: { type: String, required: true },
        city: { type: String, required: true },
        pin: { type: String, required: true },
        state: { type: String, required: true },
        more: { type: String, required: false },
      },
    },
  },
  { timestamps: true }
);

const Order = models.Order || model('Order', OrderSchema);
export default Order;

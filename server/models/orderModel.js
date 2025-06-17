import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  }
}, {
  timestamps: true,
});

const Order = mongoose.model('Order', orderSchema);

export default Order;

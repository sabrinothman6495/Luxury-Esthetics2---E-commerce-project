import { Schema, model } from 'mongoose';

const serviceSchema = new Schema({
  name: { type: String, required: true },
  description: String,
  price: Number,
  duration: Number, // in minutes
});

export default model('Service', serviceSchema);

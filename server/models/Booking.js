import { Schema, model } from 'mongoose';

const bookingSchema = new Schema({
  clientName: String,
  clientEmail: String,
  service: { type: Schema.Types.ObjectId, ref: 'Service' },
  date: Date,
  status: { type: String, default: 'pending' },
});

export default model('Booking', bookingSchema);

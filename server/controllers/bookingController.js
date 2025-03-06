import Booking from '../models/Booking.js';


export async function getAllBookings(req, res) {
  const bookings = await find().populate('service');
  res.json(bookings);
}

export async function createBooking(req, res) {
  const { clientName, clientEmail, service, date } = req.body;
  const booking = new Booking({ clientName, clientEmail, service, date });
  await booking.save();
  res.status(201).json(booking);
}

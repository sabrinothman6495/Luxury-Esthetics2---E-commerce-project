import { Router } from 'express';
import { createBooking, getAllBookings } from '../controllers/bookingController.js';
const router = Router();

router.get('/', getAllBookings);
router.post('/', createBooking);

export default router;

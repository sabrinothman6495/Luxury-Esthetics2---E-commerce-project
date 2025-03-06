import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import dotenv from "dotenv"; 
import errorHandler from "./middleware/errorHandler.js";
import 'colors';

// Load environment variables
dotenv.config();

// Connect to database
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
import authRoutes from "./routes/authRoutes.js";
import serviceRoutes from "./routes/serviceRoutes.js";
import bookingRoutes from "./routes/bookingRoutes.js";

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5001;

app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`.green.bold)
);

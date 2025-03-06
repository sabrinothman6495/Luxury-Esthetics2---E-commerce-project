import { Schema, model } from 'mongoose';
import bcrypt from 'bcrypt';  // Import bcrypt

const { hash, compare } = bcrypt;  // Destructure hash and compare from bcrypt

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'client'], default: 'client' },
});

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  this.password = await hash(this.password, 10);  // Use bcrypt.hash here
  next();
});

// Method to compare password during login
userSchema.methods.comparePassword = async function (password) {
  return compare(password, this.password);  // Use bcrypt.compare here
};

export default model('User', userSchema);

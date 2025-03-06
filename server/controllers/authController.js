import jwt from 'jsonwebtoken'; // Use default import for jsonwebtoken
const { sign } = jwt;  // Destructure sign from the jwt package
import User from '../models/User.js';
import bcrypt from 'bcrypt';
const { compare } = bcrypt;  // Use compare from bcrypt

const secret = process.env.JWT_SECRET;

export async function register(req, res) {
  try {
    const { username, password, role } = req.body;
    const user = new User({ username, password, role });
    await user.save();
    res.status(201).json({ message: 'User registered successfully!' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function login(req, res) {
  const { username, password } = req.body;

  // Use User.findOne() directly
  const user = await User.findOne({ username });
  if (!user) return res.status(400).json({ message: 'User not found' });

  const isMatch = await compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

  const token = sign({ userId: user._id, role: user.role }, secret, { expiresIn: '1h' });
  res.json({ token });
}

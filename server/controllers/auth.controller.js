const User = require('../schemas/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

exports.signup = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ message: "Database is currently unavailable. Please check your MongoDB connection!" });
    }

    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      return res.status(400).json({ message: "All fields are required!" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists with this email!" });
    }

    const existingUsername = await User.findOne({ username });
    if (existingUsername) {
      return res.status(400).json({ message: "Username is already taken!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    console.log(`New user registered: ${email}`);
    res.status(201).json({ message: "User registered successfully!" });

  } catch (error) {
    console.error('Signup Error:', error.message);
    res.status(500).json({ message: `Registration failed: ${error.message}` });
  }
};

exports.login = async (req, res) => {
  try {
    if (mongoose.connection.readyState !== 1) {
      return res.status(500).json({ message: "Database is currently unavailable. Please check your MongoDB connection!" });
    }

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required!" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Incorrect password!" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "YOUR_SECRET_KEY", { expiresIn: '1h' });

    res.json({
      message: "Login successful!",
      token: token,
      username: user.username
    });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong during login!" });
  }
};

exports.getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user).select('-password');
    if (!user) return res.status(404).json({ message: "User not found!" });
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch profile." });
  }
};

exports.updateProfile = async (req, res) => {
  try {
    const { username, email, phone, avatar } = req.body;
    
    if (email) {
      const existingUser = await User.findOne({ email });
      if (existingUser && existingUser._id.toString() !== req.user) {
        return res.status(400).json({ message: "Email is already taken by another account!" });
      }
    }

    const updatedUser = await User.findByIdAndUpdate(
      req.user,
      { $set: { username, email, phone, avatar } },
      { new: true }
    ).select('-password');

    res.json({ message: "Profile updated successfully!", user: updatedUser });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile." });
  }
};

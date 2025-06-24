const Farmer = require('../models/farmerModel');
const bcrypt = require('bcryptjs');

exports.registerFarmer = async (req, res) => {
  try {
    const { name, surname, address, phone, aadharCard, username, password } = req.body;

    // Check if username already exists
    const existingFarmer = await Farmer.findOne({ username });
    if (existingFarmer) {
      return res.status(400).json({ success: false, message: 'Username already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const farmer = new Farmer({
      name,
      surname,
      address,
      phone,
      aadharCard,
      username,
      password: hashedPassword
    });

    await farmer.save();

    res.status(201).json({ success: true, message: 'Farmer registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.loginFarmer = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the farmer exists
    const farmer = await Farmer.findOne({ username });
    if (!farmer) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    // Check if the password is correct
    const isMatch = await bcrypt.compare(password, farmer.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid username or password' });
    }

    res.status(200).json({ success: true, message: 'Login successful' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

exports.getFarmers = async (req, res) => {
  try {
    const farmers = await Farmer.find();
    res.status(200).json(farmers);
  } catch (err) {
    res.status(400).json({ success: false, message: err.message }); // fixed the typo here
  }
};

// Delete a farmer by ID
exports.deleteFarmer = async (req, res) => {
  try {
    const { id } = req.params;

    // Check if farmer exists
    const farmer = await Farmer.findById(id);
    if (!farmer) {
      return res.status(404).json({ success: false, message: 'Farmer not found' });
    }

    await Farmer.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: 'Farmer deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
exports.updatePassword = async (req, res) => {
  console.log(req.body)
  const { phone } = req.params; // Fetch phone from URL params
  const { newPassword } = req.body; // Fetch new password from request body

  try {
    // Find user by phone number
    const user = await Farmer.findOne({ phone: phone });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Hash the new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);

    // Update the user's password
    user.password = hashedPassword;
    await user.save();

    res.status(200).json({ success: true, message: 'Password updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};
const express = require('express');
const multer = require('multer');
const PayRequestShop = require('../models/payRequestShopModel');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/'); // Specify the folder for uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Generate unique file names
  }
});

const upload = multer({ storage: storage });

exports.upload = upload.single('passbookPhoto'); // Export the upload middleware

exports.createPayRequestShop = async (req, res) => {
  try {
    const payRequestShop = new PayRequestShop(req.body);
    await payRequestShop.save();
    res.status(201).json({ success: true, message: 'Pay Request Shop created successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
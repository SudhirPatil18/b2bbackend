// index.js

require('dotenv').config(); // Load environment variables from .env file
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const multer = require('multer');
const path = require('path');



const shopRoutes = require('./routes/shopRoutes');
const farmerRoutes = require('./routes/farmerRoutes');
const customerRoutes = require('./routes/customerRoutes');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const farmerOrderRoutes = require('./routes/farmerOrderRoutes');
const checkoutRoutes = require('./routes/checkoutRoutes');
const singleproductRoutes = require('./routes/singleproductRoutes');
const orderRoutes = require('./routes/orderRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');
const farmeraddproductRoutes = require('./routes/farmeraddproductRoutes');
const shopProductRoutes = require('./routes/shopProductRoutes');
const shopPayRequestRoutes = require('./routes/shopPayRequestRoutes');
const payRequestFarmerRoutes = require('./routes/payRequestFarmerRoutes');
const contactRoutes = require('./routes/contactRoutes');
const favorites=require('./routes/favorites')
const shopFarmerOrderRoutes = require('./routes/shopFarmerOrderRoutes');
const showProductRoutes=require('./routes/showProductRoutes');
const otpRoutes = require('./routes/VerifyOtpRoutes');
const imageRoutes = require('./routes/uploadedImagesRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const authRoutes = require('./routes/currentPasswordRoutes');
const farmerPasswordRoutes=require('./routes/FarmerPasswordRoutes')
const ProfileSettingsRoutes = require('./routes/ProfileSettingsRoutes');
const farmerProfileRoutes = require('./routes/FarmerProfileRoutes'); 
const ShopCheckoutRoutes = require('./routes/ShopcheckoutRoutes'); 
const FarmerTransactionRoutes = require('./routes/FarmertransactionRoutes');
const app = express();

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(bodyParser.urlencoded({ extended: false })); // Parse URL-encoded request bodies
app.set('trust proxy', 1) // trust first proxy
// Multer middleware for file uploads

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.use('/uploads', express.static('uploads'));
  // Serve static files for product images
  app.use('/product-images', express.static(path.join(__dirname, 'product-images')));
 // Serve static files for images
  app.use('/shop-product-images', express.static(path.join(__dirname, 'shop-product-images')));
  app.use('/shop-payrequest-images', express.static(path.join(__dirname, 'shop-payrequest-images')));
app.use('/farmer-payrequest-images', express.static(path.join(__dirname, 'farmer-payrequest-images')));

// Routes
app.use(express.json());
app.use('/api', shopRoutes);
app.use('/api', farmerRoutes);
// app.use('/api/farmers', farmerRoutes);
app.use('/api/customers', customerRoutes);
app.use('/api/categories', categoryRoutes); // Use category routes
app.use('/api/products', productRoutes);
app.use('/api', farmerOrderRoutes);
app.use('/api', checkoutRoutes);
app.use('/api/singleproducts', singleproductRoutes);
app.use('/api', orderRoutes);
app.use('/api/users', userRoutes);
app.use('/admin', adminRoutes);
app.use('/api/shopproducts', shopProductRoutes);
app.use('/api/farmeraddproduct', farmeraddproductRoutes);
app.use('/api', shopPayRequestRoutes);
app.use('/api', payRequestFarmerRoutes);
app.use('/api', contactRoutes);
app.use('/api/shop-farmer-orders', shopFarmerOrderRoutes);
app.use('/api/show-product',showProductRoutes)
app.use('/api/favorites',favorites)
app.use('/shop-product-images', express.static(path.join(__dirname, 'shop-product-images')));
app.use('/uploads/images', imageRoutes);
app.use('/api/otp', otpRoutes);
app.use('/api', paymentRoutes);
app.use('/api/auth', authRoutes);
app.use(ProfileSettingsRoutes);
app.use('/api/auth',farmerPasswordRoutes)
app.use('/api/farmers',farmerProfileRoutes)
app.use('/api/shopcheckouts',ShopCheckoutRoutes)
app.use('/api',FarmerTransactionRoutes)

// Server Start
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

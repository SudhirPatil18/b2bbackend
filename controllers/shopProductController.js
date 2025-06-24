const ShopProduct = require('../models/shopProductModel');
const upload = require('../middleware/shopProductUpload');
const path = require('path');
// Add a new product
// Add product controller
exports.addProduct = async (req, res) => {
  console.log(req.body)
    try {
        const { productName, productDescription, productPrice, productCategory,Shoptoken } = req.body;
        
        // Ensure the required fields are present
        if (!productName || !productDescription || !productPrice || !productCategory ||!Shoptoken) {
            return res.status(400).json({ success: false, message: 'All fields are required.' });
        }

        // Process image upload if present
        let productImage = '';
        if (req.file) {
            productImage = req.file.path;
        }

        const newProduct = new ShopProduct({
            productName,
            productDescription,
            productPrice,
            productCategory,
            productImage,
            Shoptoken
        });

        await newProduct.save();
        res.status(201).json({ success: true, message: 'Product added successfully!' });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ success: false, message: 'Server error.' });
    }
};

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await ShopProduct.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch products', error: error.message });
  }
};

// Get a single product by ID
exports.getProduct = async (req, res) => {
  try {
   
    const { productId } = req.params;
    const product = await ShopProduct.findById(productId);
    if (!product) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch product', error: error.message });
  }
};

// Update a product by ID
exports.updateProduct = async (req, res) => {
  try {
   
    const productId = req.params.productId;
    const updateData = {
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productCategory: req.body.productCategory,
    };

    if (req.file) {
      updateData.productImage = req.file.filename;
    }

    const updatedProduct = await ShopProduct.findByIdAndUpdate(productId, updateData, { new: true });
    res.json({ success: true, product: updatedProduct });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Failed to update product' });
  }
};

// Delete a product by ID
exports.deleteProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const deletedProduct = await ShopProduct.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete product', error: error.message });
  }
};



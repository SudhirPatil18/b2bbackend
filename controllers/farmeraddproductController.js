const FarmerAddProduct = require('../models/farmeraddproductModel');
const upload = require('../middleware/farmerproductupload');

// Add a new product
exports.addProduct = (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error('Upload error:', err);
      return res.status(400).json({ success: false, message: err.message });
    }
    if (!req.file) {
      console.log('No file selected');
      return res.status(400).json({ success: false, message: 'No file selected' });
    }

    const newProduct = new FarmerAddProduct({
      productName: req.body.productName,
      productDescription: req.body.productDescription,
      productPrice: req.body.productPrice,
      productCategory: req.body.productCategory,
      productImage: req.file.filename,
      username: req.body.username[1], // Add the username field here
      farmername: req.body.farmername// Add the farmername field here
    });

    newProduct.save()
      .then(product => {
        console.log('Product added successfully:', product);
        res.status(201).json({ success: true, message: 'Product added successfully', product });
      })
      .catch(err => {
        console.error('Failed to add product:', err);
        res.status(500).json({ success: false, message: 'Failed to add product', error: err.message });
      });
  });
};

// Fetch all products
exports.getAllProducts = async (req, res) => {
  try {
    const products = await FarmerAddProduct.find();
    res.status(200).json({ success: true, products });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to fetch products', error: error.message });
  }
};

// Get a single product by ID
exports.getProduct = async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await FarmerAddProduct.findById(productId);
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
      username: req.body.username // Add the username field here
    };
    if (req.file) {
      updateData.productImage = req.file.filename;
    }

    const updatedProduct = await FarmerAddProduct.findByIdAndUpdate(productId, updateData, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
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
    const deletedProduct = await FarmerAddProduct.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, message: 'Product not found' });
    }
    res.status(200).json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Failed to delete product', error: error.message });
  }
};

const multer = require('multer');
const path = require('path');

// Define storage and file filter for shop product uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'shop-product-images/'); // Set your path here
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Invalid file type, only images are allowed!'), false);
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload.single('productImage');

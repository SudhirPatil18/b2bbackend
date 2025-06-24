const multer = require('multer');
const path = require('path');

// Configure storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('Setting destination for file:', file.originalname);
    cb(null, 'product-images/');
  },
  filename: (req, file, cb) => {
    const filename = file.fieldname + '-' + Date.now() + path.extname(file.originalname);
    console.log('Generated filename:', filename);
    cb(null, filename);
  }
});

// File filter to allow only specific file types
const fileFilter = (req, file, cb) => {
  console.log('Filtering file:', file.originalname);
  const allowedTypes = /jpeg|jpg|png|gif/;
  const extname = allowedTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = allowedTypes.test(file.mimetype);

  if (extname && mimetype) {
    console.log('File accepted:', file.originalname);
    return cb(null, true);
  } else {
    console.log('File rejected:', file.originalname);
    cb(new Error('Error: Images Only!'));
  }
};

// Multer upload configuration
const farmerproductupload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 5 }, // 5 MB limit
  fileFilter: fileFilter
}).single('productImage');

module.exports = farmerproductupload;

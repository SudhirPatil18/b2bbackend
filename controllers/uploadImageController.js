const path = require('path');
const fs = require('fs');

// Serve image file paths as URLs
exports.getImages = (req, res) => {
  const imagesFolder = path.join(__dirname, '../shop-product-images');
  const baseUrl = `${req.protocol}://${req.get('host')}/shop-product-images/`; // Construct the base URL

  fs.readdir(imagesFolder, (err, files) => {
    if (err) {
      console.error('Error reading directory:', err);
      return res.status(500).json({ error: 'Failed to load images' });
    }

    // Map the file names to full URLs
    const imageUrls = files.map(fileName => ({
      fileName: fileName,
      url: baseUrl + fileName
    }));

    res.json({ images: imageUrls });
  });
};

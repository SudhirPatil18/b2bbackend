const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');

router.post('/add', categoryController.addCategory);
router.get('/all', categoryController.getCategories);
router.delete('/delete/:id', categoryController.deleteCategory);
router.put('/update/:id', categoryController.updateCategory);

module.exports = router;

const Category = require('../models/categoryModel');

// Add a new category
exports.addCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new Category({ name });
        await newCategory.save();
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Get all categories
exports.getCategories = async (req, res) => {
    try {
        const categories = await Category.find();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete a category
exports.deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        await Category.findByIdAndDelete(id);
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update a category
exports.updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;
        const updatedCategory = await Category.findByIdAndUpdate(id, { name }, { new: true });
        res.status(200).json(updatedCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const singleproductService = require('../services/singleproductService');
const addSingleProduct = async (req, res) => {
    console.log(req.body.product)
    try {
        const product = await singleproductService.addSingleProduct(req.body.product);
        res.status(201).json({ message: 'Product added successfully', product });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product', error });
    }
};

const getCartItems = async (req, res) => {
    try {
        const cartItems = await singleproductService.getCartItems();
        res.status(200).json(cartItems);
        console.log(req.body)

    } catch (error) {
        res.status(500).json({ message: 'Error fetching cart items', error });
    }
};

const deleteCartItem = async (req, res) => {
    try {
        const { id } = req.params;
        await singleproductService.deleteCartItem(id);
        res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting product', error });
    }
};
module.exports = { addSingleProduct, getCartItems, deleteCartItem };

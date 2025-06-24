const SingleProduct = require('../models/singleproductModel');
const DeletedItem = require('../models/DeletedProductModel');
const showProduct=require('../models/showProductModel')
const addSingleProduct = async (productData) => {
    console.log(productData)
    const product = new SingleProduct(productData);
    await product.save();
    return product;
};
const getCartItems = async () => {
    const cartItems = await SingleProduct.find(); // Adjust the filter logic if needed
    return cartItems;
};


const deleteCartItem = async (id) => {
    await SingleProduct.findByIdAndDelete(id);
};
const deleteCartItems = async (id) => {
    try {
        console.log(`Attempting to delete cart items with token: ${id}`);
        
        // Find items to delete
        const itemsToDelete = await SingleProduct.find({ token: id });
        if (itemsToDelete.length === 0) {
            console.log(`No items found with token: ${id}`);
            return { deletedCount: 0 };
        }

        // Save items to DeletedItem collection
        await DeletedItem.insertMany(itemsToDelete.map(item => ({
            ...item._doc,
            deletedAt: new Date(),
        })));

        // Delete items from SingleProduct collection
        const result = await SingleProduct.deleteMany({ token: id });
        console.log(`Deleted ${result.deletedCount} items with token: ${id}`);
        return result;
    } catch (error) {
        console.error(`Error deleting cart items: ${error.message}`);
        throw error;
    }
};
const showSingleProduct = async (productData) => {
    const showproduct = new showProduct(productData);
    await showproduct.save();
    return showproduct;
};
const getSingleProduct = async () => {
    const singleProducts = await showProduct.find({}); // Adjust the filter logic if needed
    return singleProducts;
};
const getDeletedItems = async (req, res) => {
    try {
        const deletedItems = await DeletedItem.find({});
        // console.log(deleted)
        return deletedItems
    } catch (error) {
       return { message: `Error retrieving deleted items: ${error.message}` }
    }
};
const getCancelOrders = async (orderId) => {
    console.log(orderId)
    try {
      const order = await DeletedItem.findById(orderId);
      if (!order) {
        return { status: 404, message: 'Order not found' };
      }
  
      // Update the order status to 'cancelled'
      order.status = 'cancelled';
      const updatedOrder = await order.save();
  
      return { status: 200, data: updatedOrder };
      
    } catch (error) {
      return { status: 500, message: `Error canceling order: ${error.message}` };
    }
  };

module.exports = { getCancelOrders,addSingleProduct, getCartItems, deleteCartItem,showSingleProduct, getSingleProduct,deleteCartItems,getDeletedItems};

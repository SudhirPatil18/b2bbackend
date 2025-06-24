const singleproductService = require('../services/singleproductService');

const showSingleProduct = async (req, res) => {
        try {
            console.log(req.body)
           const product = await singleproductService.showSingleProduct(req.body);
           res.status(201).json({ message: 'Product added successfully', product });
       } catch (error) {
           res.status(500).json({ message: 'Error adding product', error });
       }
    }


const getSingleProducts = async (req, res) => {
    try {
        const singleProduct = await singleproductService.getSingleProduct();
        // console.log(singleProduct)
        res.status(200).json(singleProduct);

    } catch (error) {
        res.status(500).json({ message: 'Error fetching Single Product', error });
    }
};

const deleteSingleProduct= async (req, res) => {
    const token = req.body.token;
     const data=await singleproductService.deleteCartItems(token)
    console.log(data)
}
const getDeletedItems= async (req, res) => {
   const deletedItems= await singleproductService.getDeletedItems();
   res.status(201).json(deletedItems);
}
const getCancelOrders= async (req, res) => {
   const cancelorders= await singleproductService.getCancelOrders(req.params.id);
   res.status(201).json(cancelorders);
}

  

module.exports = {getCancelOrders,showSingleProduct,getSingleProducts,deleteSingleProduct,getDeletedItems};
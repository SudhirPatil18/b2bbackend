const Order=require('../models/orderModel')

exports.readOrders = async (req, res) => {
  const Orders=await Order.find({})
  res.status(201).json(Orders)
  }
  exports.postOrders=async (req, res)=>{
req.body.forEach(item=>{
  const data={
    product:item.productName,
    quantity: item.quantity,
    price: item.price,
    customerName: item.Name,
    mobileNumber: item.Mobile,
    email: item.email,
    address: item.Address,
    payment: item.Payment,
    shoptoken:item.shoptoken
  }
 
  const order=new Order(data);
   order.save();
  console.log(item)
})
   
  }
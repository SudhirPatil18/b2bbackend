const favoritesModel=require('../models/favoritesModel')

exports.addfavorites=async (req,res)=>{
    console.log(req.body
    )
    const favorites={
        name:req.body.name,
        description: "this is great product",
        price: req.body.price,
        image:req.body.image ,
        token:req.body.token
}
const data=new favoritesModel(favorites);
await data.save()
    res.status(201).json("Product added successfully")
}
exports.getfavorites=async (req,res)=>{
    const favoritesData=await favoritesModel.find({})
    console.log(favoritesData)
    res.status(201).json(favoritesData);
}
const productModel = require("../models/productModel")

const createproduct= async function (req, res) {
    const createdproduct = await productModel.create(req.body) 
    res.send(createdproduct)
    
}
module.exports.createproduct=createproduct

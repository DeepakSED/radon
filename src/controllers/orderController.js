const { modelNames } = require("mongoose")
const orderModel =require("../models/orderModel")
const userModel = require("../models/userModel")

const createorder = async function(req,res){
const orders = await orderModel.find().populate(['user_id', 'product_id'])
res.send(orders)
}

const orderPurchase = async function(req,  res){
    const user =await userModel.findById(req.body.user_id)
    const product =await productModel.findById(req.body.product_id)
    res.send()
    if(user){
        if(product){
            if(req.headers.isfreeappuser =="true"){
                req.body.amount =0 
                req.body.isFreeAppUser =true
                const createsOrder = await orderModel.create(req.body)
                res.send(createsdOrder)
            }
            else {
                const user = await userModel.findOneAndUpdate({
                    _id :req.body.user_id,
                    balance: {$gt:req.body.amount}},
                    {$inc: {balance :-req.body.amount}}, 
                    {new :true})
                   if(user){
                    await orderModel.create(req.body)
                    res.send({msg:user})
                   }
                   else
                    res.send("blance  is Empty")
                        }
                    }else 
                    res.send("please provide the product")
                }
              else
                res.send("provide the userid")
            }  
    
        
module.exports.createorder=createorder
module.exports.orderPurchase=orderPurchase
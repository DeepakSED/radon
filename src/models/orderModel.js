//const moment = require('moment');
const mongoose = require('mongoose');
const objectId =mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {

    user_id : {
        type:objectId,
        ref:"User_for"
    },
    product_id:{
        type:objectId,
        ref:"productDetails"
    },
    amount:Number,
    isFreeAppUser:{type:Boolean, },
    date: {type:Date, default:Date.now}
}, { timestamps: true });
module.exports = mongoose.model('orderDetails', orderSchema) 

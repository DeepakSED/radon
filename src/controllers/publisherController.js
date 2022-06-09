const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const publisherModel1 =require("../models/PubilsherModel")


const createBook= async function (req, res) {
    let data = req.body
    let saveData = await bookModel.create(data)
    return res.send({msg:saveData})
    
}

const createPublisher = async function(req ,res){
    let  data = req.body
    let  saveData = await publisherModel1.create(data)
    return res.send({msg:saveData})
}

const createAuthor = async function(req ,res){
    let data =req.body
    let saveData= await authorModel.create(data)
    return res.send({msg:saveData})
}




module.exports.createBook= createBook
module.exports.createAuthor= createAuthor
module.exports.createPublisher = createPublisher




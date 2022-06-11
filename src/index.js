const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose  = require('mongoose');
const commonMiddlewares=require('./middlewares/commonMiddlewares.js')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const assiginment=function(req,res,next){
    var currentdate=new Date();
    var datetime=currentdate.getDate() +" "
                +(currentdate.getMonth()+1) +" "
                +currentdate.getFullYear()+ " "
                +currentdate.getHours() + ":"
                +currentdate.getMinutes() + ":"
                +currentdate.getSeconds();
    let ip=req.ip
    let url=req.originalUrl
    console.log(`${datetime} ${ip} ${url}`)
    next()
 }
 app.use(assiginment)


mongoose.connect("mongodb+srv://Deepak:Deepak9162@cluster0.uylkg.mongodb.net/middleware-1?retryWrites=true&w=majority", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use(commonMiddlewares.mid1);
app.use('/', route);




app.listen(process.env.PORT || 3002, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3002))
});
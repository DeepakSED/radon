
const mongoose = require('mongoose')
const middle = async function (req, res) {
    try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token) return res.send({ status: false, msg: "token must be present" });
    console.log(token);
    try{
    let decodedToken = jwt.verify(token, "functionup-radon");
    }catch(error){
    // if (!decodedToken)
    console.log(error.message)
      return res.send({ status: false, msg: "token is invalid" });
    }
    let userId = req.params.userId;
    let userDetails = await userModel.findById(userId);
    if (!userDetails)
      return res.send({ status: false, msg: "No such user exists" });
  
    res.send({ status: true, data: userDetails });
  }catch(error)
   {
    return res.send({ status: false, msg: error.message });
   }
   next()
  };
  module.exports.middle=middle
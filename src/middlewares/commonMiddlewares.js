const middle = function (req, res, next) 
{    let freeUser = req.headers["isfreeappuser"]
console.log(freeUser)
     if (freeUser) {
        next()
    } else { 
        res.send("error request is missing a header")
    }

}

module.exports.middle = middle

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }
// module.exports.mid2= mid2
// module.exports.mid3= mid3
// module.exports.mid4= mid4

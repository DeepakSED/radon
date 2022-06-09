const mongoose = require('mongoose');
//const objectId = mongoose.Schema.Types.objectId

const newpublisherSchema = new mongoose.Schema( {
   Name :String,
   headQuarter:String

},
{ timestamps: true });

module.exports = mongoose.model('publisher',newpublisherSchema)


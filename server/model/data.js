const mongoose = require("mongoose")

const dataSchema = new mongoose.Schema({
   identifier : {type:String, unique:true, lowercase:true},
   valid : {type:Boolean},
   title : {type:String, unique:false},
   date : {type:Date},
   text : {type:String, unique:false}
})
module.exports = mongoose.model("database",dataSchema);
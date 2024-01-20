const mongoose=require("mongoose")
 
const Product=mongoose.model("Product",new mongoose.Schema({
    title:String,
    price:Number,
    image:String,
    description:String
  
}))
 
 module.exports=Product
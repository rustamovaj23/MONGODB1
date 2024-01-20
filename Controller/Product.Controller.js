const Product=require("../Model/blog.model")
const ProductController={
getAll: async (req,res)=>{
try{
const products=await Product.find()
res.status(200).send(products)
} 
catch(error){
    res.status(404).send("DATA NOT FOUND")
}
},
getById:async (req,res)=>{
    const {id}=req.params
    try{

console.log(id)
const target= await Product.findById(id)
console.log(target)
res.status(200).send(target)
    } 
    catch(error){
        res.status(404).send("DATA NOT FOUND")
    }
},
delete: async (req,res)=>{
    const {id}=req.params
    try{
console.log(id)
await Product.findByIdAndDelete(id)
res.status(200).send("item deleted")
    } 
    catch(error){
        res.status(404).send("DATA NOT FOUND")
    }
},
add: async (req,res)=>{
    try{
const {title,price,description,image}=req.body
const newProduct=new Product({title,price,description,image})
await newProduct.save()
res.send(201).send("new Product created")
    } 
    catch(error){
        res.status(404).send("DATA NOT FOUND")
    }
},
edit: async (req,res)=>{
    try{
const {id}=req.params
const {title,price,description,image}=req.body
const update= await Product.findByIdAndUpdate(id,{title,price,description,image})
res.send(201).send(" Product update")
    } 
    catch(error){
        res.status(404).send("DATA NOT FOUND")
    }
},
}
 
module.exports=ProductController
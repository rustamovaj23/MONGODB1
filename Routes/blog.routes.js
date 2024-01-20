const express=require("express")
const router=express.Router()
const ProductController=require("../Controller/Product.Controller")
router.get("/",ProductController.getAll)
router.get("/:id",ProductController.getById)
router.post("/",ProductController.add)
router.put("/:id",ProductController.edit)
router.delete("/:id",ProductController.delete)



module.exports=router
const express = require("express");
const { postProduct, getProducts } = require("../controllers/productControllers");
const router = express.Router();


router.post('/post',postProduct)
router.get('/get',getProducts)



module.exports=router

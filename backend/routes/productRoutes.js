const express = require("express");
const {
  postProduct,
  getProducts,
} = require("../controllers/productControllers");
const router = express.Router();

//route for posting a new product
router.post("/products", postProduct);

//route for getting all products
router.get("/products/:page/:limit", getProducts);

module.exports = router;

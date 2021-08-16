const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

router.get("/", productController.products);
router.post("/", productController.productsPost);
router.get("/delete/:id", productController.delete);

module.exports = router;

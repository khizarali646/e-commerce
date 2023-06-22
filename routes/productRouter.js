const express = require("express")
const {ProductController} = require("../controllers/productController");

const router = express.Router();

router.route('/product').get(ProductController)

module.exports = router;
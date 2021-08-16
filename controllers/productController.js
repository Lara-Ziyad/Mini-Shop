const Product = require("../models/Product");

exports.products = (req, res) => {
  Product.find((err, data) => {
    res.render("products", { products: data });
  });
};

exports.productsPost = (req, res) => {
  const newProducts = new Product(req.body);
  newProducts
    .save()
    .then(() => {
      console.log("data saved");
      res.redirect("products");
    })
    .catch(() => {
      console.log("cannot find product");
    });
};

exports.delete = (req, res) => {
  const productId = req.params.id;
  Product.findByIdAndDelete(productId, (err, doc) => {
    console.log("product was deleted D:", doc);

    res.redirect("/products");
  });
};

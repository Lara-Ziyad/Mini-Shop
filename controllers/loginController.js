const User = require("../models/User");
const Product = require("../models/Product");

exports.login = (req, res) => {
  res.render("login");
};

exports.validateUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email: email, password: password }, (err, doc) => {
    const connectId = doc._id;
    User.findByIdAndUpdate(connectId, { isLoggedIn: true }, (err, doc) => {
      console.log("logged in user");
      console.log(doc);
      Product.find((err, data) => {
        res.render("products", { products: data, doc });
      });
    });
  });
};

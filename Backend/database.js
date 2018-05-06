var mongoose = require("mongoose"),
    fake = require("faker");

mongoose.connect("mongodb://localhost/neutrino_products", (err, db) => {
    if (err) {
        return console.log("connection issue!!");
    }
});

var productSchema = new mongoose.Schema({
    name: String,
    price: String,
    imageUrl: String,
    enabled: { type: Boolean, default: true }
});

var cartSchema = new mongoose.Schema({
    name: String,
    price: String,
    imageUrl: String,
    productId: String
});

var Product = mongoose.model("Product", productSchema);
var Cart = mongoose.model("Cart", cartSchema);

Product.remove({}, (err, data) => {
    if (err)
        console.log(err);
});

Cart.remove({}, (err, data) => {
    if (err)
        console.log(err);
});

for (let i = 1; i <= 10; i++) {
    var temp = {
        "name": fake.commerce.product(),
        "price": fake.commerce.price(),
        "imageUrl": "https://picsum.photos/200"
    }
    Product.create(temp, (err, data) => {
        if (err)
            console.log("Error inserting initial values to db");
    });
}

module.exports = { Product, Cart };
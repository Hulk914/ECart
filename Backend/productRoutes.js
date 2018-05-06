var express = require("express"),
    Product = require("./database").Product,
    Cart = require("./database").Cart;

var productRoutes = express.Router();
var count = 0;

function cartCount(){
    Cart.count({},(err,c)=>{
        count=c;
    });
}

productRoutes.get("/products", (req, res) => {
    Product.find({}, (err, products) => {
        if (err) {
            console.log(err);
        }
        else {
            var resp = {};
            resp.data = products;
            cartCount();
            resp.count = count;
            res.send(resp);
        }
    });
});

productRoutes.post("/products/:id", (req, res) => {
    var data = req.body;

    data['productId'] = req.params.id;
    Cart.create(data, (err, newProduct) => {
        if (err)
            console.log(err);
        else {

            cartCount();
            Product.findById(req.params.id, (err, dbProduct) => {
                if (err) {
                    console.log(err);
                }
                else {
                    dbProduct.enabled = false;
                    dbProduct.save().then(prod => {
                        res.send(prod);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            });
        }
    });

});

productRoutes.delete("/products/:id", (req, res) => {
    Cart.remove({ "productId": req.params.id }, (err, data) => {
        if (err) {
            console.log("error finding in cart!!");
        }
        else {
            cartCount();
            Product.findById(req.params.id, (err, dbProduct) => {
                if (err) {
                   console.log(err);
                }
                else {
                    dbProduct.enabled = true;
                    dbProduct.save().then(prod => {
                        res.send(prod);
                    }).catch((err) => {
                        console.log(err);
                    });
                }
            });
        }
    });
});

productRoutes.get("*", (req, res) => {
    res.send("Invalid URL");
});

module.exports = productRoutes;
var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose"),
    productRoutes = require("./productRoutes"),
    cors = require('cors');

app.use(bodyParser.json());
app.use(cors());
app.use("/api",productRoutes);

app.listen(3000, () => {
    console.log("Server is running!!");
});



// Express will make handling requests much easier
const express = require("express");
const app = express();

const productRoutes = require('./api/routes/products');

// .use method of express means that every request will have to go through app.use(...)
app.use('/products', productRoutes);

module.exports = app;

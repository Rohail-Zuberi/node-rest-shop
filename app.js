// Express will make handling requests much easier
const express = require("express");
const app = express();

// logging package for node.js
// Tell express to funnel all requests through this middleware
// Morgan will log the request and let it continue
const morgan = require('morgan');

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

app.use(morgan('dev'));

// .use method of express means that every request will have to go through app.use(...)
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;

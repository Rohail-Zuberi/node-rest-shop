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

// Handling requests that get past the above middleware. 
// Basically error handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404; // Did not find a route 
  next(error); // Forward the error request instead of the original
});

// Handles the errors passed forward by above middleware and any other error
app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  });
});

module.exports = app;

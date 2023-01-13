// Express will make handling requests much easier
const express = require("express");
const app = express();

// .use method of express means that every request will have to go through app.use(...)
app.use((req, res, next) => {
  res.status(200).json({
    message: "it works!",
  });
});

module.exports = app;

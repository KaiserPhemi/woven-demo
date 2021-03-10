// third-party libraries
const express = require('express');
const cors = require('cors');

// router
const mainRouter = require('./src/routes');

const { json } = express;
const app = express();
const port = process.env.PORT || 7000;

// middleware
app.use(json())
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);

// routes
app.use('/', mainRouter)
app.use('*', (req, res)=> {
  res.json({
    message: "Microservice v1.0 is running."
  })
});

module.exports = app.listen(port, () =>
  console.log(`Service running on port ${port}`)
);

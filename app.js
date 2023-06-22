const express = require("express");
const app = express();

const productRoute = require('./routes/productRouter')
app.use(express.json());
app.use('/api/v1', productRoute)
module.exports= app;
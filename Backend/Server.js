const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')

const app = express()

app.get("/", (req, res)=>{
    req.send("Working...")
})

mongoose.connect(process.env.URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.listen(3000, ()=>{
    console.log("Port running on 3000")
})
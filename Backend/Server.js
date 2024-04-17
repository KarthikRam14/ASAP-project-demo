const express = require('express')
require('dotenv').config()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const UserModel = require("./models/User")

const app = express()
app.use(bodyParser.json())

app.get("/", async(req, res)=>{
    let data = await UserModel.find();
    res.send(data)
})

app.post("/post", async(req, res)=>{
  let body = req.body;
  let data = await UserModel.findOne({email: body.email})
  if(data){
    return res.status(400).send({message: "user already exists"})
  }else{
    console.log(data, "user not there")
  }
  try{
    let value = await UserModel.insertMany(body);
    res.status(201).send({message: "data created", value})
  }catch(err){
    console.error(err)
  }
})

app.patch("/update/:id", async(req, res)=>{
  let body = req.body
  let id = req.params.id
  try{
    let value = await UserModel.findByIdAndUpdate(id, body, {new: true})
    res.status(201).send({message: "data updated", value})
  }catch(err){
    console.error(err)
  }
})

app.delete("/delete/:id", async(req, res)=>{
  try{
    let id = req.params.id
    let data = await UserModel.findByIdAndDelete(id)
    res.status(201).send({message: "data deleted", data})
  }catch(err){
    console.error(err)
  }
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
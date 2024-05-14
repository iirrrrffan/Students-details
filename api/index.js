const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 4000;
const morgan = require("morgan");
const cors = require("cors");

app.get("/",function(req,res){
 res.send("hello world")
})

mongoose.connect("mongodb+srv://irfanali376246:qzs5vyFGyJmbeshh@cluster0.kuw2f5p.mongodb.net/")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  }); 

app.use(express.json())
app.use(morgan("dev"))


app.listen(PORT,()=>{
    console.log("port is running");
})
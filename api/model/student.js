const mongoose = require("mongoose")


const student = mongoose.Schema({

    Name:{
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    Subject:{
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    },
    University:{
        type: String,
        require: true,
        min: 3,
        max: 20,
        unique: true,
    }
});
module.exports = mongoose.module(student);
const mongoose = require("mongoose");

let Product = mongoose.Schema({
    product_title: {
        type: String,
        require: true
     },
    product_description:{ 
        type: String,
        require: true
     
     },
     price:{
        type: Number,
        require: true
     },
     discount:{
        type: Number,
        default:0
     },
     category:{
        type: String,
        require: true
     },
     image:{
        type: String,
        require: true
     },
    

})

module.exports = mongoose.model('Product',Product)




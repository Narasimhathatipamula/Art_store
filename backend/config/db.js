const mongoose = require('mongoose');


const connectdb = async ()=> {
    try{
       await mongoose.connect('mongodb+srv://narashima:4pHxvIk4sHraKbpu@cluster0.hqgx8.mongodb.net/mydb')
       console.log("Database connected")
    } catch(err){
       console.log(err)
    }
}

module.exports = connectdb;
const express = require('express');
const connectdb = require('./config/db');
const Product = require('./models/productModels');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors')
const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/v1/products', productRoutes)


// app.get("/", async(req,res) => {
//    const data = await new Product({
//      product_title: "Vegetable",
//      product_description: "PerFect collection of vegetable",
//      price: 110,
//      discount: 10,
//      category: "Grocery",
//      image: "img"
//    }).save();

//    res.send({
//      data
//    })
// })


app.listen(4000,()=> {
   console.log('Server is listening on the port 4000');
})



connectdb()



// 4pHxvIk4sHraKbpu -password

// mongodb+srv://narashima:4pHxvIk4sHraKbpu@cluster0.hqgx8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

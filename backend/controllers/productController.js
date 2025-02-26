const Product = require('../models/productModels');



const getProducts = async (req,res)=>{
   try{
    const data = await Product.find({});


     res.status(200).send({
        success: true,
        message: "Data of products",
        data
     })
   }catch(err){
    res.status(500).send({
        success: false,
        message: "INTERNAL SERVER ERROR",
        err
    })
   }
}

const addProducts = async (req,res) => {
   try{
     const {product_title, product_description,price,discount,category,image} = req.body
    
     if(!product_title || !product_description || !price || !discount || !category || !image){
        // return res.status(404).send({
        //     success: false,
        //     message: "each field is mandatory."
        // })
     }

     await Product({
        product_title,
        product_description,
        price,
        discount,
        category,
        image
     }).save()

     res.status(200).send({
        success: true,
        message: "Data added successfully!!!"
     })

   }catch(err){
    console.log(err)
    res.status(500).send({
        success: false,
        message: "INTERNAL SERVER ERROR",
        err
    })
}
}

   
    const updateProduct = async (req, res) => {
  try{
    const product_id = req.params.id;

    await Product.updateOne({_id:product_id},{$set:req.body});

    res.status(200).send({
        success: true,
        message: "Product updated successfully",
    })
  }catch(err){
    console.log(err)
    res.status(500).send({
        success: false,
        message: "INTERNAL SERVER ERROR",
        err
    })
}
}

const deleteProduct = async (req, res) => {
  try{
    const product_id = req.params.id;

    await Product.deleteOne({_id:product_id});

    res.status(200).send({
        success: true,
        message: "product deleted successfully."
    })

  }catch(err){
    res.status(500).send({
        success: false,
        message: "INTERNAL SERVER ERROR",
        err
    })
   }
}

const getProductsbyId = async(req, res)=> {
    try{
      const id = req.params.id;
      const productExist = await Product.findById(id);
      if(!productExist){
        return res.status(404).json({message:"Product not found."})
      }
    res.status(200).json(productExist )
    } catch(error){
      res.status(500).send({
        success: false,
        message: "INTERNAL SERVER ERROR",
        err
    })
    }
}





module.exports = {getProducts, addProducts,updateProduct,deleteProduct, getProductsbyId}


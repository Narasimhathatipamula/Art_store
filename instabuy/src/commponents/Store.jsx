import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import image from '../assets/1.png'
export default function Store( { onEdit, onDelete, onAddNew }) {
    const [products, setProducts] = useState([]);
  
    const navigate = useNavigate();
  


   
    useEffect(() => {  
      async function getProducts() {
          const product = await axios.get(`http://localhost:4000/api/v1/products/get-products`);
       
            setProducts(product.data.data)         
           
           
        }
        getProducts();
    }, []);


  const handleDelete = (id) => {
    axios.delete(`http://localhost:4000/api/v1/products/delete-products/${id}`)
      .then(() => {
        setProducts(products.filter((product) => product._id !== id));
      })
      .catch(error => {
        console.error("Error deleting product", error);
      });
  };




  return (
   
   
    <div>
  
     <div style={{display: "flex", marginTop: "3%", marginLeft: "5%"}}>
    <h1 >YOUR PRODUCT</h1>
    <Button onClick={()=> navigate('/add')} style={{marginLeft: "60%"}} >Add New Product</Button>
   </div>
   
    <div style={{ display: "flex", flexWrap: "wrap",marginLeft: "7%", marginTop: "2%"}}>
           {products.map((product) => {
         
         return (
            <Card key={product._id} style={{ width: "15rem", border: "none", margin: 20 }}>
               <Card.Img src={product.image} style={{height:"40%", width:"90%"}}/>
           <Card.Title style={{marginLeft: "20%"}}>{product.product_title}</Card.Title>
           
            <div style={{display: "flex", gap: "8%", marginLeft: "20%"}}>
            <Card.Text style={{color: "blue"}}>${product.price}</Card.Text>
            <p style={{color: "#23216ad9"}} >({product.discount}%)</p>
            </div>
            
         

               
                     
           <div style={{display: "flex",  gap: "8%"}}>
              <Button onClick={()=> navigate(`/update/${product._id}`, {state:product})}  style={{width: "40%", borderRadius: "10%"}}>Edit</Button>
              <button style={{backgroundColor: "red", width: "40%", borderRadius: "10%"}} onClick={() => handleDelete(product._id)}>Delete</button>
           
             </div> 
           </Card> 
       );
   })}
    </div> 
 </div>


  )
}

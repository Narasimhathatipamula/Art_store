import React from 'react'
import { Row , Col, Form, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from 'axios';
export default function Update() {
   const location = useLocation();
 //  console.log(location)
     const navigate = useNavigate();
        // const {product_title, price, image,product_description ,discount, category, id} = location.state;
     
      
      const products = {
        product_title : "",
       product_description : "",
         price :"",
         discount: "",
         category: "",
         image: "" ,
       };
      

    
   
     const [formData, setFormData] = useState(products)
      const {id} = useParams();
  
     const inputHander = (e) =>{
      const {name, value} = e.target
      console.log(name, value)
  
     setFormData({...formData, [name]: value})
     }

     useEffect(()=> {
      if(id){
       axios.get(`http://localhost:4000/api/v1/products/product/${id}`)
       .then((response)=>{
        
            setFormData(response.data)
       })
       .catch((error)=> {
          console.log(error)
       })
      }
     },[id])
   
   

    const submitForm = async(e) => {
        e.preventDefault();
      await axios.put(`http://localhost:4000/api/v1/products/update-products/${id}`, formData)
        .then((response)=>{
             
               console.log("Product created successfully.")
               navigate('/store')
        })
        .catch((error)=>{
               console.log(error)
        })
       
    }

  return (
    <div >
    <Row>
        <Col>
        <form onSubmit={submitForm}  style={{display: "table-cell", padding: "5%", backgroundColor: "gray", width: "50%"}} >            
  
            <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='text' id="product_title"  value={formData.product_title} name="product_title" onChange={ inputHander} placeholder='Product Title'  autoComplete="off"  required />
            <textarea style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type="text" name="product_description" value={formData.product_description} onChange={inputHander} id="product_description" autoComplete="off"  placeholder='Product Description'></textarea>
           <div >
           <input style={{width:"36%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='number' id='price' value={formData.price} name='price' onChange={inputHander}   placeholder='Product Price' required />
           <input style={{width:"36%", borderRadius: "10px", height:"8vh", marginLeft: "8%"}} type='number' id='discount' name='discount' onChange={inputHander} value={formData.discount} placeholder='Product Desount' required  />
           </div >
            <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}}type="category"   id='category' name='category' value={formData.category} autoComplete="off" onChange={inputHander}  placeholder='Product Category'/>
           <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='text' id='image' value={formData.image} onChange={inputHander} autoComplete="off"  name='image' placeholder='Product Image Url' /> 
        
        <button type="submit"  style={{width:"30%", borderRadius: "10px", height:"8vh", marginTop: "6%",backgroundColor: "yellow", color: "black"}}>Update button</button>
        </form>
     </Col> 
      <Col>
        <div style={{display: "grid", marginTop: "5%", marginLeft: "5%"}}>
          <h1 >LIVE PREVIEW</h1>
       
        
          
          <p style={{marginTop: "5%"}}>{formData.product_description}</p>
             <h2 style={{marginTop: "10%", overflow: "hidden", width: "69.1%"}}>{formData.image}</h2>
             <h1 style={{marginTop: '10%'}}>{formData.product_title}</h1>
           
           <div style={{display: 'flex', marginTop: "3%", gap: "5%"}}>
              <h4 style={{color: "blue"}}>${formData.price}</h4>
              <p style={{color: "#23216ad9  "}}>({formData.discount}% off)</p>
           </div>
          <Button style={{marginTop: "3%", width: "25%" }} onClick={()=> navigate('/cart')}>Add Cart</Button>
        </div>
     </Col>
   </Row>
</div>
  
  
  )
}
 
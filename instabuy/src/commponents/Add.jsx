
import { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate, useLocation } from 'react-router-dom';


import { Row , Col, Form, Button } from "react-bootstrap";
export default function Add() {
 
  const navigate = useNavigate();

  const product = {
    product_title : "",
    product_description: "",
    price: "",
    discount: "",
    category: "",
    image : "",
  };
   const [formData, setFormData] = useState(product)

   const inputHander = (e) =>{
    const {name, value} = e.target
    console.log(name, value)
    setFormData({...formData, [name]: value})
   }
 
  const submitForm = async(e) => {
      e.preventDefault();
    await axios.post('http://localhost:4000/api/v1/products/add-products', formData)
      .then((response)=>{
          
             console.log("Product created successfully.")
             navigate('/store')
      })
      .catch((error)=>{
             console.log(error)
      })
  }

  
  return (
    
    <div>
        <Row>
            <Col >
            <form onSubmit={submitForm}  style={{display: "table-cell",padding: "5%", backgroundColor: "gray", position: "fixed"}}>
             
                <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='text' id="product_title"  name="product_title" onChange={inputHander} placeholder='Product Title' autoComplete="off" required />
                <textarea style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} name="product_description" onChange={inputHander} id="product_description" autoComplete="off"  placeholder='Product Description'></textarea>
               <div >
               <input style={{width:"36%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='number' id='price' name='price' onChange={inputHander}   placeholder='Product Price' required />
               <input style={{width:"36%", borderRadius: "10px", height:"8vh", marginLeft: "8%"}} type='number' id='discount' name='discount' onChange={inputHander}   placeholder='Product Discount' />
               </div >
                <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}}id='category' name='category' autoComplete="off" onChange={inputHander}  placeholder='Product Category'/>
                <input style={{width:"80%", borderRadius: "10px", height:"8vh", marginTop: "6%"}} type='text' id='image' onChange={inputHander} autoComplete="off"   name='image' placeholder='Product Image Url'  />

                <Button type="submit"  style={{width:"30%", borderRadius: "10px", height:"8vh", marginTop: "6%"}}>Add New Product</Button>
            </form>
         </Col>
          <Col>
            <div style={{ marginTop: "2%",position: "fixed"}}>
              <h1>LIVE PREVIEW</h1>
             
               <div style={{marginTop: "2%",}}>
                          <p>{formData.product_description}</p>
                          <h2 style={{marginTop: "5%", width: "50%",overflow: "hidden"}}>{formData.image}</h2>
                          <h1 style={{marginTop: ' 5%'}}>{formData.product_title}</h1>
                        <div style={{display: 'flex', marginTop: "3%", gap: "5%"}}>
                       <h4>${formData.price}</h4>
                        <p>{formData.discount}%</p>
                        </div>
                        </div>
                        <Button style={{marginTop: "3%", width: "35%" }} onClick={()=> navigate('/cart')}>Add to Cart</Button>
            </div>
         </Col>
       </Row>
  </div>
  )
}

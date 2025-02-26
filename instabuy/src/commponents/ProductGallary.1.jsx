import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate, useLocation, useParams } from "react-router-dom";


export default function ProductGallary() {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
  
 
 
   
    useEffect(() => {       
         async function getProducts() {
          const response = await axios.get(`https://api.escuelajs.co/api/v1/products?offset=0&limit=20`);
        
            setProducts(response.data);
           
           
        }
        getProducts();
    }, []);
 
   
    return (

        <div style={{ padding:50, display: "flex"}}>
 

               
             <div >  
                <h3 >SELECT A PRODUCT</h3>
   
   <div style={{ display: "flex", flexWrap: "wrap" }}>

   {products.map((product) => {
         
       return (
           <Card key={product.id} style={{ width: "15rem", border: "none", margin: 20 }}>
               <Card.Img src={product.images[0]} />
               <Card.Title>{product.title}</Card.Title>
               <Card.Text>{product.price}</Card.Text>
              <Button onClick={() => navigate(`/product/${product.id}`,{state:product})} style={{ width: 120 }}>View Now</Button>      
                  
               
                
               </Card>
       );
   })}
     
</div>
</div>

             
           
        </div>
    );
}

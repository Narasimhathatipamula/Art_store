import { Row , Col, Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Image1 from "../assets/1.png";

import React from 'react'

export default function LoginPage({setUser}) {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
  return (
        <div style={{backgroundColor: "pink"}}>
                  <Row >
                      <Col  >
                         <div style={{height: "100%"}}>
                                      <img src={Image1} style={{marginLeft: "20%", marginTop: "14%", height: "53%", width: "60%"}} />
                        
                        <Button onClick={() => {
                                   localStorage.setItem('userEmail', email)
                                   setUser( email);
                                   navigate('/sellers')
                                  }}
                                 style={{marginLeft: "28%", marginTop: "12%", width: "40%", marginBottom: 20, backgroundColor: "#23216ad9", borderWidth: 1, borderColor: "white", color: "white", height: "50px"}} type="submit">
                               GO to Sellers Login
                                </Button>
                                      </div>
                    
                        
                      </Col>
                      <Col  >
                      <div style={{marginTop: "18%", marginLeft: "10%",backgroundColor: "#23216ad9", border: "1px solid block", borderRadius: "10px",height: "70%", width: "70%", padding: "0.5%" }}>
                          
                           <h5 style={{color: "white", marginLeft: "5%", marginTop: "10%"}}>Login and start shopping from your fevorite brands. Refer a friend and save 50% OFF </h5>
                           <Form >
                                <div style={{ justifyContent: "space-between", marginTop: "10%", marginLeft: "10%" }}>
                                    <Form.Group style={{width: "80%", height: "30%"}} className="mb-3" controlId="formBasicEmail">
                                       <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                                    </Form.Group>
      
                                     <Form.Group style={{width: "80%", marginTop: "10%"}} className="mb-3" controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                     </Form.Group>
      
                                  </div>
      
      

      
                                 <Button onClick={() => {
                                  localStorage.setItem('userEmail', email)
                                  setUser( email);
                                  navigate('/')
                                 }}
                                 style={{width: "30%", marginBottom: 20, backgroundColor: "#23216ad9", borderWidth: 1, borderColor: "white", color: "white", marginTop: "8%", marginLeft: "30%" }}  type="submit">
                                 Shoppers Login
                               </Button>
                               <div style={{color: "white", marginTop: "5%"}}>
                                <a style={{color: "white", marginLeft: "32%"}} onClick={()=> navigate("/")}>Create Account</a>
                               </div>
                           </Form>
                        </div> 
                      </Col>
                  </Row>
              </div>
  )
}

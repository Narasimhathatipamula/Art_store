
import { Row , Col, Form, Button } from "react-bootstrap";

import LoginImg from "../assets/singup.png"
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Signup({setUser}){
    const [email,setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div style={{backgroundColor: "#23216ad9"}}>
            <Row style={{padding: 75}}>
                <Col style={{padding: 100}}>
                  <div>
                     <h1 style={{color: "white"}}>InstaBuy!</h1>
                     <h3 style={{color: "white"}}>One place for all your needs</h3>
                     <Form>
                          <div style={{width: "80%", display: "flex", justifyContent: "space-between"}}>
                              <Form.Group style={{width: "49%"}} className="mb-3" controlId="formBasicEmail">
                                 <Form.Control type="email" onChange={(e) => setEmail(e.currentTarget.value)} placeholder="Enter email" />
                              </Form.Group>

                              <Form.Group style={{width: "49%"}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="password" placeholder="Password" />
                              </Form.Group>

                            </div>

                            
                           <Button  onClick={() =>{
                            localStorage.setItem('userEmail', email)
                            setUser(email)
                            navigate('/')
                           }}
                            style={{width: "80%", marginBottom: 20, backgroundColor: "#23216ad9", borderWidth: 1, borderColor: "white", color: "white" }}  type="submit">
                              Join the club
                         </Button >
                         <div style={{color: "white"}}>
                            already a member? <a style={{color: "white"}} onClick={() => navigate('/login')}>click here</a>
                        </div>
                     </Form>
                     
                  </div>
                </Col>
                <Col>
                 <img src={LoginImg} height="500vh"/>
                </Col>
            </Row>
        </div>
    )
}
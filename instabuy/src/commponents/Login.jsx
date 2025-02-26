import { Row , Col, Form, Button } from "react-bootstrap";
import { useState } from "react";

import LoginImg from "../assets/login.png"
import { useNavigate } from "react-router-dom";
import image from "../assets/2.png"
import Image1 from "../assets/1.png";


export default function Login({setUser}){
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    return(
        <div >
            <Row >
                <Col  >
              <div style={{height: "100%"}}>
              <img src={Image1} style={{marginLeft: "20%", marginTop: "14%", height: "60%", width: "60%"}} />

<Button onClick={() => {
         
           navigate('/loginPage')
          }}
         style={{marginLeft: "28%", marginTop: "12%", width: "40%", marginBottom: 20, backgroundColor: "#23216ad9", borderWidth: 1, borderColor: "white", color: "white", height: "50px"}} type="submit">
        Shopping Login
        </Button>
              </div>
                  {/* <div>
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


                              
                              <Form.Group style={{width: "80%"}} className="mb-3" controlId="formBasicPassword">
                                <Form.Control type="text" placeholder="Enter Full name" />
                              </Form.Group>

                           <Button onClick={() => {
                            localStorage.setItem('userEmail', email)
                            setUser( email);
                            navigate('/')
                           }}
                           style={{width: "80%", marginBottom: 20, backgroundColor: "#23216ad9", borderWidth: 1, borderColor: "white", color: "white" }}  type="submit">
                           Start Shopping
                         </Button>
                         <div style={{color: "white"}}>
                          Join the club, <a style={{color: "white"}} onClick={()=> navigate("/login")}>Click here</a>
                         </div>
                     </Form>
                  </div> */}
                </Col>
                <Col style={{backgroundColor: "#23216ad9"}} >
                <div>
                <img src={image} style={{marginLeft: "20%", height: "20%", width:"60%",marginTop:"15%"}} />

<Button onClick={() => {
          
           navigate('/sellers')
          }}
          style={{marginLeft: '30%', marginTop: "8%",width: "40%", marginBottom: 20, backgroundColor: "pink", borderWidth: 1, borderColor: "wwhite", color: "blue", height: "50px"}} type="submit">
         Sellers Login
        </Button>
                </div>
                </Col>
            </Row>
        </div>
    )
}
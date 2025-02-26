import { Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import Col from "react-bootstrap/Col";
import CarouselOneImg from "../assets/Carousel-1.png"
import CarouselTwoImg from "../assets/Carousel-2.png"
import CarouselThreeImg from "../assets/Carousel-3.png"
import { Button } from 'react-bootstrap';

import CompanyOneImg from "../assets/company-1.png";
import CompanyTwoImg from "../assets/company-2.png";
import CompanyThreeImg from "../assets/company-3.png";
import CompanyFourImg from "../assets/company-4.png";
import CompanyFiveImg from "../assets/company-5.png";
import CompanySixImg from "../assets/company-6.png";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'



export default function Home({user}){
   const [cartItems, setCartItems] = useState({})
  const navigate = useNavigate();
  const handleCtAClick = () => {
    if (user) {
      navigate('/products');
    }else {
      navigate('/login')
     
    }
  }
    return (
           
     
        <div className='home-container'>
        
            <Carousel>
              <Carousel.Item>
               <Row>
                 <Col>
                   <div style={{padding : 100}}>
                      <h1 style={{fontWeight: 700}}>
                         <i> SHOP WITH UTMOUST</i>
                      </h1>
                      <h1 style={{color: "#216ad9", fontWeight: 700}}> <i>STYLE</i></h1>
                      <h3 style={{marginBottom: 20}}>
                        Shop with latest trendy products
                      </h3>
                      <div>
                        <Button style={{width: 250}} onClick={handleCtAClick}>Browse Products</Button>
                      </div>
                      <div>
                       <h4>Products are availiable from:</h4>
                       <img src={CompanyOneImg} style={{height: 40}} />
                       <img src={CompanyTwoImg} style={{height: 50}} />
                       <img src={CompanyThreeImg} style={{height: 50}} />
                       <img src={CompanyFourImg} style={{height: 50}} />
                       <img src={CompanyFiveImg} style={{height: 50}} />
                       <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                    </div>
                   
                </Col>
                 <Col>
                 <img src={CarouselOneImg} style={{height: "86vh", }} />
                 </Col>
               </Row>
             </Carousel.Item>
             <Carousel.Item>
             <Row>
                 <Col>
                   <div style={{padding : 100}}>
                      <h1 style={{fontWeight: 700}}>
                         <i> SHOP WITH UTMOUST</i>
                      </h1>
                      <h1 style={{color: "#216ad9", fontWeight: 700}}> <i>STYLE</i></h1>
                      <h3 style={{marginBottom: 20}}>
                        Shop with latest trendy products
                      </h3>
                      <div style={{marginBottom: 20}}>
                        <Button style={{width: 250}}
                        onClick={handleCtAClick}>Browse Products</Button>
                      </div>
                      <div>
                       <h4>Products are availiable from:</h4>
                       <img src={CompanyOneImg} style={{height: 40}} />
                       <img src={CompanyTwoImg} style={{height: 50}} />
                       <img src={CompanyThreeImg} style={{height: 50}} />
                       <img src={CompanyFourImg} style={{height: 50}} />
                       <img src={CompanyFiveImg} style={{height: 50}} />
                       <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                   </div>
                   
                 </Col>
                 <Col>
                   <img src={CarouselTwoImg} style={{height: "110vh"}} />
                 </Col>
               </Row>
             </Carousel.Item>
              <Carousel.Item>
              <Row>
                 <Col>
                 <div style={{padding : 100}}>
                       <h1 style={{fontWeight: 700}}>
                         <i> SHOP WITH UTMOUST</i>
                      </h1>
                      <h1 style={{color: "#216ad9", fontWeight: 700}}> <i>DISCOUNT</i></h1>
                      <h3 style={{marginBottom: 20}}>
                        Shop with latest trendy products
                      </h3>
                      <div>
                        <Button style={{width: 250}}   onClick={handleCtAClick}>Browse Products</Button>
                      </div>
                      <div>
                       <h4>Products are availiable from:</h4>
                       <img src={CompanyOneImg} style={{height: 40}} />
                       <img src={CompanyTwoImg} style={{height: 50}} />
                       <img src={CompanyThreeImg} style={{height: 50}} />
                       <img src={CompanyFourImg} style={{height: 50}} />
                       <img src={CompanyFiveImg} style={{height: 50}} />
                       <img src={CompanySixImg} style={{height: 50}} />
                    </div>
                    </div>
                  
                 </Col>
                 <Col>
                  <img src={CarouselThreeImg}  style={{height: "110vh"}}/>
                 </Col>
               </Row>
              </Carousel.Item>
            </Carousel>
        </div>
    )
}
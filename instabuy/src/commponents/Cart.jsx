
import { Table, Row, Col, Button } from 'react-bootstrap';
import  React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import CartImage from "../assets/cart.png";

export default function Cart({cartItems}){
   
   const [totalPrice, setTotalPrice] = useState(0);
   const [totalQuantity, setTotalQuantity] = useState(0);
   const navigate = useNavigate();

   useEffect(() => {
      let tempPrice = 0;
      let tempQuantity = 0;
      Object.keys(cartItems).map((cartItemId) => {
        const details = cartItems[cartItemId];
        tempQuantity += details.quantity;
        tempPrice += details.quantity * details.price;
      })
      setTotalQuantity(tempQuantity);
      setTotalPrice(tempPrice);
   }, [])
    return (
     <div style={{margin:60}}>
        <Row>
            <Col style={{margin: 40}}>
              <h3>Your Cart: </h3>
              <div>
                 <Table style={{marginTop: 40}}>
                     <thead>
                       <tr>
                          <td>Name</td>
                          <td>Quantity</td>
                          <td>Price</td>

                       </tr>
                     </thead>
                      <tbody>
                         {Object.keys(cartItems).map((cartItemId) => {
                            const itemDetails = cartItems[cartItemId];
                            return (
                                <tr>
                                    <th>{itemDetails.title}</th>
                                    <th>{itemDetails.quantity}</th>
                                    <th>{itemDetails.quantity * itemDetails.price}</th>
                                </tr>
                            )
                         })}
                         <tr>
                            <td>Total</td>
                            <td>{totalQuantity}</td>
                            <td>{totalPrice}</td>
                         </tr>
                      </tbody>
                 </Table>
              </div>
              <Button onClick={() => navigate('/checkout')}>Purchase</Button>
              {/* <Button onClick={() => navigate('/checkout'})}>Purchase</Button>
              */}
            </Col>
            <Col>
              <img src={CartImage} height={500} />
            </Col>
        </Row>
    </div>
 )
}
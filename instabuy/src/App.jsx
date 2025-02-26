import { useEffect, useState } from 'react'
import { Badge, Button } from 'react-bootstrap';
import { Routes, Route, useNavigate, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Home from './commponents/Home';
import Login from './commponents/Login';

import './App.css'
import Logo from "./assets/logo.png"

import Signup from "./commponents/Signup"
import ProductGallary from "./commponents/ProductGallary.1";
import ProductDetails from './commponents/ProductDetails';
import Cart from "./commponents/Cart";
import Checkout from './commponents/Checkout';
import LoginPage from './commponents/LoginPage';
import Seller from "./commponents/Seller";
import Store from './commponents/Store';

import Update from './commponents/Update';
import Add from './commponents/Add';


function App() {


 
  const navigate = useNavigate();
  const [user, setUser] = useState('');
  const [cartItems, setCartItems] = useState({})

  useEffect(() => {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
      setUser(userEmail)
    }
  }, [])

  const handleAddToCart = (item) =>{
    setCartItems({...cartItems, ...item})
  }
  const [productToEdit, setProductToEdit] = useState(null);

  const handleProductSaved = () => {
    setProductToEdit(null); // Reset form after adding/editing product
  };

  const handleAddNew = () => {
    setProductToEdit(null); // Reset the form to add a new product
  };


  return (
  
    <div>
      

       
       
       
  
       <Navbar className="instabuy-navbar">
       
           <Navbar.Brand onClick={()=> navigate('/')}> 
           <img alt=''
             src={Logo} width="6%" className="d-inline-block align-top"
           />  {''}
          STAR SHOPPER</Navbar.Brand> 
              <Navbar.Collapse className="justify-content-end">
                {user && <Button onClick={()=> navigate('/cart')}>Cart &nbsp; {Object.keys(cartItems).length > 0 && (<Badge bg="success">{Object.keys(cartItems).length}</Badge>)}</Button>}
                    &nbsp; &nbsp; &nbsp; &nbsp;
                <Button onClick={() => navigate("/login")}>{user?  "Logout" : "Login"}</Button>
            </Navbar.Collapse>
          
       </Navbar>
      
       <Routes>
      
       <Route path='/loginPage' element={<LoginPage setUser={setUser}/>}/>
       <Route path='/sellers' element={<Seller  setUser={setUser} />}/>
       <Route path='/' element={<Home user={user} />} />
       
          <Route path='/login' element={<Login setUser={setUser}/>} />
         <Route path='/signup' element={<Signup setUser={setUser}/>} /> 
         <Route path='/products' element={<ProductGallary handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
         <Route path='/product/:id' element={<ProductDetails handleAddToCart={handleAddToCart} cartItems={cartItems}/>} />
         <Route path='/cart' element={<Cart cartItems={cartItems} />} />
         <Route path='/checkout' element={<Checkout />} /> 
         <Route path='/store' element={<Store   
          
         />}/>
        
         <Route path='/update/:id' element={<Update handleAddToCart={handleAddToCart} />}/>
        <Route path='/add' element={<Add/>} />
       
       </Routes>
     
    </div>

      
  )
}

export default App

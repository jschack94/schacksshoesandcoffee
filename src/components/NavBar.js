import React, {useContext} from 'react'
 import { Container, Anchor, Icon } from 'atomize'
 import { Link } from 'react-router-dom'
 import logo from '../assets/commerce.png';
 import { ShopContext } from '../context/shopContext'

 const Navbar = () => {

     const mystyle = {
         color: "black",
         padding: "10px",
         fontFamily: "Arial",
         position: "static"
       };


     const { openCart } = useContext(ShopContext)



     return (
         <>  
         
         
             <Container d="flex" flexDir="row" p="2rem" justify="space-between" >
               
                <Link to="/"><Icon name="Store" size="30px" color="black500" /></Link>
                <h1> <img src={logo} alt="commerce.js" height="45px" /> Schack's Shoes</h1>
                

                 <Anchor onClick={() => openCart()}><Icon name="Bag" size="20px" color="black500" /></Anchor>
             </Container>
            
         </>
     )
 }

 export default Navbar
import React, {useContext} from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core';

import logo from '../assets/commerce.png';
import { ShoppingCart } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopContext'
import useStyles from './styles';

const Navbar = () => {


const classes = useStyles();





   

    return (
        <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> Schack's Shoes
          </Typography>
          <div className={classes.grow} />
          
          
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
            
                <ShoppingCart />
            
            </IconButton>
        
         
        </Toolbar>
      </AppBar>
   
    </>
  );
};

export default Navbar
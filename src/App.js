import React from 'react';
import './App.css';
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import ShopProvider from './context/shopContext'

import HomePage from './pages/HomePage'
import ProductPage from './pages/ProductPage'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const debug = process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();
const engine = new Styletron();


const App = () => {
  return (
   
    <ShopProvider>
      
      <StyletronProvider value={engine} debug={debug} debugAfterHydration>
    
        <Router>
       
        
          <Navbar />
          <Switch>
            <Route path="/product/:id">
              <ProductPage />
            </Route>
            <Route path="/">
              <HomePage />
            </Route> 
          </Switch>
        </Router>
        <Footer />
       
        
      </StyletronProvider>
  
    </ShopProvider>
    
  );
}

export default App;
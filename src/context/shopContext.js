import React, { Component } from "react";
import Client from "shopify-buy";

const ShopContext = React.createContext();



const client = Client.buildClient({
  storefrontAccessToken: "d017f30ce60ab3805517d13518097892",
  domain: "jonnybgoods1994.myshopify.com",
});

class ShopProvider extends Component {
  state = {
    products: [],
    product: {},
    checkout: {},
    isCartOpen: false,
  };

  

  fetchAllProducts = async () => {
    const products = await client.product.fetchAll();
    this.setState({ products: products });
  };

  fetchProductWithId = async (id) => {
    const product = await client.product.fetch(id);
    this.setState({ product: product });
    console.log(JSON.stringify(product));

    return product;
  };

  closeCart = () => {
    this.setState({ isCartOpen: false });
  };
  openCart = () => {
    this.setState({ isCartOpen: true });
  };

  render() {
    return (
      <ShopContext.Provider
        value={{
          ...this.state,
          fetchAllProducts: this.fetchAllProducts,
          fetchProductWithId: this.fetchProductWithId,
          closeCart: this.closeCart,
          openCart: this.openCart,
          addItemToCheckout: this.addItemToCheckout,
        }}
      >
        {this.props.children}
      </ShopContext.Provider>
    );
  }
}

const ShopConsumer = ShopContext.Consumer;

export { ShopConsumer, ShopContext };

export default ShopProvider;
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PageHeader from './components/PageHeader';
import ProductCard from './components/ProductCard';import { useState } from "react";

import {products} from "./utlis/products";

function App() {
    // State for products and cart quantity
    const [availableProducts, setAvailableProducts] = useState(products);
    const [cartQuantity, setCartQuantity] = useState(0);

    // Function to handle adding items to the cart
    const addToCart = (productId) => {
      const updatedProducts = availableProducts.map(product => {
        if (product.id === productId) {
          product.addedToCart = true;
        }
        return product;
      });
      setAvailableProducts(updatedProducts);
      setCartQuantity(cartQuantity + 1);
    };

    // Function to handle removing items from the cart
    const removeFromCart = (productId) => {
      const updatedProducts = availableProducts.map(product => {
        if (product.id === productId) {
          product.addedToCart = false;
        }
        return product;
      });
      setAvailableProducts(updatedProducts);
      setCartQuantity(cartQuantity - 1);
    };

  return (
    <div className="App">
      <Navbar cartQuantity={cartQuantity}/>
      <PageHeader pagetitle="Shop" pagesubheading={"Shopping Cart Task"}/>
      <div className='container'>
        <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
          {
            products.map((product) => {
                return <ProductCard 
                        key={product.id}
                        product={product}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                        cartQuantity={cartQuantity}
                        setCartQuantity={setCartQuantity} />
              })
          }
        </div>
      </div>
    </div>
  );
}

export default App;

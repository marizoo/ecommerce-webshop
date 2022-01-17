import React, {useState, useEffect} from 'react'
import { commerce } from './lib/commerce'

import { Products, Navbar } from './components';

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  },[]);

  
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    
    setCart(item.cart);
  }
  
  console.log(cart)

  return (
    <div>
      <Navbar totalItems={cart.total_items}/>
      <Products products={products} onHandleAddToCart={handleAddToCart}/>
    </div>
  )
}

export default App

// https://www.youtube.com/watch?v=377AQ0y6LPA&t=265s
// https://github.com/adrianhajdin/project_e_commerce
//  till minute 58.30, adding to cart. maybe ID problem.
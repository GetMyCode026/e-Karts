
import './App.css';
import Home from './Components/Home';
import Product from './Components/Product';

import { BrowserRouter as Router ,Routes, Route } from 'react-router-dom';
import ProductD from './Components/ProductD';
import SearchD from './Components/SearchD';
import Cart from './Components/Cart';
import { items } from './Components/Data';
import { useState } from 'react';


function App() {

  const [ data , setData] = useState ([...items])
  const [cart , setCart] = useState([])


  return (
   <div>
    <Router>
    <Home cart={cart} setData={setData} />
    <Routes>
      <Route  path='/' element={<Product cart={cart} setCart={setCart}  items={data}/>}/>
      <Route  path='/Product/:id' element={<ProductD cart={cart} setCart={setCart}/>}/>
      <Route  path='/SearchD/:term' element={<SearchD cart={cart} setCart={setCart}/>}/>
      <Route  path='/Cart' element={<Cart cart={cart} setCart={setCart} />}/>

    </Routes>
    
    </Router>
  
   
    
    </div>
  );
}

export default App;


import { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components';
import { getAllProducts } from './api';
import { appRoutes } from './constants';
import { OrderPage, ProductPage } from './pages';
import './App.css';

function App() {
  const [products, setProducts] = useState([])
  const [orders, setOrders] = useState([]);
  
  useEffect(() => {
    getAllProducts()
    .then(result =>setProducts(result)) 
    .catch(err => console.log(err)) 
  },[])

  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          type={appRoutes.PRODUCTS.type}
          path={appRoutes.PRODUCTS.path} 
          element={<ProductPage products={products}/>} 
        />
         <Route 
          type={appRoutes.ORDERS.type}
          path={appRoutes.ORDERS.path} 
          element={<OrderPage/>} 
        />
        <Route 
          path="*" 
          element={ <Navigate to={appRoutes.PRODUCTS.path}/>}
         />
          
      </Routes>
    </div>
  );
}

export default App;

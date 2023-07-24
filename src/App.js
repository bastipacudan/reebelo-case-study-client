import { Routes, Route, Navigate } from 'react-router-dom';
import { NavBar } from './components';
import { appRoutes } from './constants';
import { OrderPage, ProductPage } from './pages';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route 
          type={appRoutes.PRODUCTS.type}
          path={appRoutes.PRODUCTS.path} 
          element={<ProductPage/>} 
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

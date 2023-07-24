import React from 'react'
import "./NavBar.css";

import { NavLink } from 'react-router-dom';
 
export const NavBar = () => {
   return (
      <nav>
         <ul className='c-NavBar__container'>
            <li>
               <NavLink to="/orders">Orders</NavLink>
            </li>
            <li>
               <NavLink to="/products">Products</NavLink>
            </li>
         </ul>
      </nav>
   );
};
 

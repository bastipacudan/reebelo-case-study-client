import React from 'react'
import "./NavBar.css";

import { NavLink } from 'react-router-dom';
 
export const NavBar = () => {
   return (
      <nav>
         <ul className='c-NavBar__container'>
            <li className='c-NavBar__listItem'>
               <NavLink 
                className='c-NavBar__listItem'
                to="/products"
               >Products</NavLink>
            </li>
            <li>
               <NavLink 
                className='c-NavBar__listItem'
                to="/orders"
                >Orders</NavLink>
            </li>
         </ul>
      </nav>
   );
};
 

import React, { useState } from 'react'
import { PopupWrapper } from '../PopupWrapper/PopupWrapper';
import "./AddNewProductPopup.css";

export const AddNewProductPopup = () => {


  return (
   <PopupWrapper
    title="Create a Product"
    onClosePopup={() => {}}
   >
    <div
     className='c-AddNewProductPopup__container'
    >   
       <div className='c-AddNewProductPopup__top_container'>
            <label> Product name: </label>
            <input></input>
            
            <label> Description name: </label>
            <input></input>
            
            <label> Quantity: </label>
            <input></input>

            <label> Price: </label>
            <input></input>
       </div>
       <div className='c-AddNewProductPopup__footer_container' >
        Footer 
       </div>
    </div>
   </PopupWrapper>
  )
}
 
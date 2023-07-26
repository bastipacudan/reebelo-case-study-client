import React from 'react'
import "./AppButton.css";

export const AppButton = ({
    text,
    onClick = () => {},
    style,
    icon
  }) => {
    return (
      <button 
        className="c-AppButton__container"
        onClick={onClick}
        style={style}
      >
        {icon && <img className="a-AppButton__icon" src={icon}/>}
        {text}
      </button>
    );
}
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { assets } from "../../../constants/assets";
import { AppButton } from "../../../components";
import "./PopupWrapper.css";

export function PopupWrapper({
  onClosePopup = () => {},
  leftFooterButtons = [],
  rightFooterButtons = [],
  title = "",
  subtitle = "",
  children,
  style,
  className = "",
  headerText = "",
  headerStyle,
  footerText = "",
}) {
  const [isOpen, setIsOpen] = useState(true);

  const onClose = () => {
    onClosePopup();
    setIsOpen(false);
  }

  const getFooterButtons = (buttons) => {
    return buttons.map((button, index) => {
      return (
        <AppButton
          key={index}
          onClick={button.action}
          text={button.text}
          buttonStyle={button.style}
          style={{
            "marginRight": "0.6rem",
          }}
        />
      )
    })
  }

  const getConfindentialText = () => {
    return (
      <div className='c-PopupWrapper__information_text_container'>
          <img src={assets.informationIcon}/>
          <label>{footerText} </label>
        </div>
    )
  }
  return (
    <Popup
      open={isOpen} 
      position="top center" 
      onClose={onClosePopup}
      closeOnDocumentClick={false}
      closeOnEscape={false}
      modal={true}
      className={className}
    >
      <div className="c-PopupWrapper__wrapper" style={style}>
        <div className="c-PopupWrapper__container">
          <div className="c-PopupWrapper__header" style={headerStyle}>
            {headerText}
            <div className="c-PopupWrapper__title_container">
              <label className="c-PopupWrapper__title">{title}</label>
              <span 
                className="c-PopupWrapper__subtitle_container"
                style={{
                  "visibility": subtitle ? "visible" : "hidden"
                }}
              >
                {subtitle}
              </span>
            </div>
            <img className="c-PopupWrapper__closeIcon" src={assets.closeIcon} alt="Close" onClick={onClosePopup}/>
          </div>

          {children}
          <br />
          <br />
          <div className="c-PopupWrapper__footer">
            <div className="c-PopupWrapper__leftItems" style={{ flex: footerText.length > 0 ? "4" : "1"}}>
              {getFooterButtons(leftFooterButtons)}
              {footerText && getConfindentialText()}
            </div>
            <div className="c-PopupWrapper__rightItems">
              {getFooterButtons(rightFooterButtons)}
            </div>
          </div>
        </div>
      </div>
    </Popup>
  )
}
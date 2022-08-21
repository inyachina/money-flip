import React from "react";
import './popup.scss'
import approved from '../../assets/img/approved.svg'

export const CustomPopup = () => (
    <div id="custom_popup" className='popup'>
        <div className="popup_container">
            <img src={approved}/>
            <div className="text">
                Спасибо! Ваша заявка принята.<br/>
                Мы скоро с вами свяжемся.
            </div>
        </div>
    </div>
);

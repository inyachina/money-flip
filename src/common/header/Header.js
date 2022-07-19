import React, {useState} from "react";
import './header.scss';
import watsup from '../../assets/img/watsup.svg';
import menu from '../../assets/img/menu.svg';
import white_close from '../../assets/img/white_close.svg';
import {CSSTransition, Transition} from "react-transition-group";

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const openMenu = () => setIsOpenMenu(true)
    const closeMenu = () => setIsOpenMenu(false)

    return (
        <div id="header" className="flex_container">
            <div className="logo">MONEYFLIP</div>
            <div className="links flex_container">
                <a>О нас</a>
                <a>Правила обмена</a>
                <button className="light_button">Написать в WhatsApp</button>
            </div>
            <div className="phone_bar flex_container">
                <img src={watsup}/>
                <img src={menu} onClick={openMenu}/>
            </div>
             <CSSTransition in={isOpenMenu}
                            unmountOnExit
                            timeout={200}>
                <div id="navbar">
                    <img src={white_close} id="white_close" onClick={closeMenu}/>
                    <div className="menu_links flex_container__column">
                        <a>О нас</a>
                        <a>Правила обмена</a>
                    </div>
                    <div className="contacts flex_container__column">
                        <button className="accent_button">Написать в WhatsApp</button>
                        <a>+7977777777</a>
                        <a>+7977777777</a>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

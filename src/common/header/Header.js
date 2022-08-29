import React, {useState} from "react";
import './header.scss';
import watsup from '../../assets/img/watsup.svg';
import menu from '../../assets/img/menu.svg';
import white_close from '../../assets/img/white_close.svg';
import {CSSTransition} from "react-transition-group";
import data from '../../Data.json'

export const Header = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const openMenu = () => setIsOpenMenu(true)
    const closeMenu = () => setIsOpenMenu(false)

    return (
        <div id="header" className="flex_container">
            <a className="logo" href="/">MONEYFLIP</a>
            <div className="links flex_container">
                <div className="pretty_links flex_container">
                    <a href='/aboutUs'>О нас</a>
                    <a href='/exchangeRules'>Правила обмена</a>
                </div>
                <a href={data.whatsUp}>
                    <button className="light_button">Написать в WhatsApp</button>
                </a>
            </div>
            <div className="phone_bar flex_container">
                <a href={data.whatsUp}><img src={watsup}/></a>
                <img src={menu} onClick={openMenu}/>
            </div>
            <CSSTransition in={isOpenMenu}
                           unmountOnExit
                           timeout={200}>
                <div id="navbar">
                    <img src={white_close} id="white_close" onClick={closeMenu}/>
                    <div className="menu_links flex_container__column">
                        <a href="/aboutUs">О нас</a>
                        <a href='/exchangeRules'>Правила обмена</a>
                    </div>
                    <div className="contacts flex_container__column">
                        <a href={data.whatsUp}>
                            <button className="accent_button">Написать в WhatsApp</button>
                        </a>
                        <a href={`tel:${data.tel_1}`}>{data.tel_1}</a>
                        <a href={`tel:${data.tel_2}`}>{data.tel_2}</a>
                    </div>
                </div>
            </CSSTransition>
        </div>
    )
}

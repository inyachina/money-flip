import React from "react";
import './footer.scss'
import viber from '../../assets/img/viber.svg'
import tg from '../../assets/img/tg.svg'
import inst from '../../assets/img/inst.svg'
import vk from '../../assets/img/vk.svg'
import fb from '../../assets/img/fb.svg'

export const Footer = () => {
    const socials = [{
        link: '.',
        img: viber
    }, {
        link: '.',
        img: tg
    }, {
        link: '.',
        img: inst
    }, {
        link: '.',
        img: vk
    }, {
        link: '.',
        img: fb
    },]
    return (<div id="footer" >
        <div className="flex_container__column company">
            <a className="logo" href="/" >MONEYFLIP</a>
            <div className="sub_title">© 2022 MoneyFlip</div>
        </div>
        <div className="flex_container__column contacts">
            <div className="flex_container phones">
                <div>+7 999 99-99-99</div>
                <div>+7 999 99-99-99</div>
            </div>
            <div className="socials flex_container">
                {socials.map((social) => (
                    <a className="circle container__centered">
                        <img src={social.img}/>
                    </a>))}
            </div>
        </div>
    </div>)
}

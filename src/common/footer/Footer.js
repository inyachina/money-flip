import React from "react";
import './footer.scss'
import whatsup from '../../assets/img/whatsup_default.svg'
import tg from '../../assets/img/tg.svg'
import inst from '../../assets/img/inst.svg'
import vk from '../../assets/img/vk.svg'
import fb from '../../assets/img/fb.svg'
import data from '../../Data.json';
export const Footer = () => {
    const socials = [{
        link: data.inst,
        img: whatsup
    }, {
        link: data.tg,
        img: tg
    },
    //     {
    //     link: data.inst,
    //     img: inst
    // }
    ]
    return (<div id="footer" >
        <div className="flex_container__column company">
            <a className="logo" href="/" >MONEYFLIP</a>
            <div className="sub_title">© 2022 MoneyFlip</div>
        </div>
        <div className="flex_container__column contacts">
            <div className="flex_container__column phones">
                <a href={`tel:${data.tel_1}`}>{data.tel_1}</a>
                <a href={`tel:${data.tel_2}`}>{data.tel_2}</a>
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

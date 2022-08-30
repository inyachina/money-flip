import React, {useEffect, useState} from "react";
import './about.scss';
import {Player} from "@lottiefiles/react-lottie-player";
import WorkingGirl from '../../../assets/json/Working_girl.json'
import accentSpot from '../../../assets/img/accentSpot.png'
import lightSpot from '../../../assets/img/lightSpot.png'
import {Helmet} from "react-helmet";
import axios from "axios";

export const About = ({executeScroll}) => {
    const [dollar, setDollar] = useState(0)
    const [aed, setAed] = useState(0)

    useEffect(() => {
        axios.get("https://www.cbr-xml-daily.ru/daily_json.js")
            .then((result) => {
                setDollar(result.data.Valute.USD.Value)
            })
    })
    return (
        <div id="about">
            <Helmet type="text/javascript" src="https://www.cbr-xml-daily.ru/money.js"/>
            <div className="left_side">
                <div className="flex_container tools">
                    <button className="exchange_btn">Переводы без санкций</button>
                    <span className="concurrency flex_container">
                        <div className="point container__centered">$</div>
                        <div>
                            {dollar.toFixed(2)}
                        </div>
                        <div>
                            {(dollar + dollar / 20).toFixed(2)}
                        </div>

                        {/*<div className="point container__centered">AED</div>*/}
                        {/*<div>*/}
                        {/*    {aed}*/}
                        {/*</div>*/}
                        {/*<div>*/}
                        {/*    {aed + aed / 0.95}*/}
                        {/*</div>*/}
                    </span>
                </div>
                <div className="t1 title">Платежи для бизнеса с глобальными амбициями</div>
                <div className="sub_title">Совершайте платежи через границу и развивайте свой бизнес, где бы вы ни
                    находились. Быстро и безопасно. Такой и должна быть современная коммерция.
                </div>
                <button className="accent_button"
                        onClick={() =>window.location.href = '#form'}
                >Оплатить
                </button>
            </div>
            <div className="right_side container__centered">
                <div className="json_container__relative">
                    <img src={lightSpot} className="light_spot"/>
                    <img src={accentSpot} className="accent_spot"/>
                    <div className="json_container__absolute">
                        <Player autoplay
                                loop
                                src={WorkingGirl}/>
                    </div>
                </div>
            </div>
        </div>)
}

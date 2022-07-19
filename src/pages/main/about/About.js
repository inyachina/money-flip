import React, {useEffect, useState} from "react";
import './about.scss';
import {Player} from "@lottiefiles/react-lottie-player";
import WorkingGirl from '../../../assets/json/Working_girl.json'
import accentSpot from '../../../assets/img/accentSpot.png'
import lightSpot from '../../../assets/img/lightSpot.png'

export const About = () => {
    const [dollar, setDollar] = useState(0)
    const [aed, setAed] = useState(0)

    useEffect(() => {
    })

    return (
        <div id="about">
            <div className="left_side">
                <div className="flex_container tools">
                    <button className="exchange_btn">Круглосуточный обмен</button>
                    <span className="concurrency flex_container">
                        <div className="point container__centered">$</div>
                        <div>
                            {dollar}
                        </div>
                        <div>
                            {dollar + dollar / 0.95}
                        </div>

                        <div className="point container__centered">AED</div>
                        <div>
                            {aed}
                        </div>
                        <div>
                            {aed + aed / 0.95}
                        </div>
                    </span>
                </div>
                <div className="title">Обменивайте<br/> быстро и безопасно</div>
                <div className="sub_title">Выгодный и легкий способ отправить ваши деньги за границу или обменять их в
                    реальном времени 24/7. Отправляйте деньги дешевле и проще, чем у старомодных банков
                </div>
                <button className="accent_button">Обменять</button>
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

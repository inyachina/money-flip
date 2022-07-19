import React from "react";
import './notFound.scss'
import lightSpot from "../../assets/img/lightSpot.png";
import accentSpot from "../../assets/img/accentSpot.png";
import {Player} from "@lottiefiles/react-lottie-player";
import WorkingGirl from "../../assets/json/Working_girl.json";

export const NotFoundPage = () => {
    return <div id="notFoundPage" className="grid_container__halved">
        <div className="container__centered flex_container__column">
            <div className="title">404 error</div>
            <div className="sub_title">Страница не найдена</div>
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
    </div>
}

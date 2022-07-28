import React, {useEffect} from "react";
import './select.scss'
import $ from 'jquery';

import sber from '../../assets/img/sber-logo.svg'

export const SelectImg = (props) => {

    useEffect(() => {
    })
    const handleChange = () => {

    }
    return <div className="select-sim" id="select-color">
        <div className="options">
            <div className="option">
                <input type="radio" name="color" value="yellow" id="color-yellow"/>
                <label htmlFor="color-yellow">
                    <img src={sber} alt=""/> Yellow
                </label>
            </div>
            <div className="option">
                <input type="radio" name="color" value="pink" id="color-pink"/>
                <label htmlFor="color-pink">
                    <img src={sber} alt=""/> Pink
                </label>
            </div>

        </div>
    </div>
}

import React from "react";
import './clients.scss'

export const Clients = () => {
    const imgs = [0, 1, 2]

    return (
        <div id="clients">
            <div className="title">Что о нас <span>говорят клиенты</span></div>
            <div className=" photos">
                {imgs.map((img) => (<div>
                    <img src={img}/>
                </div>))}
            </div>
        </div>
    )
}

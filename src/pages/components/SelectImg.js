import React, {useEffect, useState} from "react";
import './select.scss'

export const SelectImg = (props) => {
    const [index, setIndex] = useState(0)
    useEffect(() => {
    })
    const handleChange = () => {

    }
    return <div className="sending_form__img-select ">
        <div className="dump_container container__centered">
            {index !== undefined ?
                <img className="dump" src={props.banks[index].img}/> :
                <div className="dump"/>}
        </div>
        <select className="select_img ">
            {/*<option style={{backgroundImage: `url(${sber}sber)`}}>male</option>*/}
            {props.banks.map((bank, i) =>
                <option key={i}>{bank.name}</option>
            )}
        </select>
    </div>


}

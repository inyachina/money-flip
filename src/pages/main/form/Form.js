import React, {useState} from "react";
import './form.scss';
import sber from '../../../assets/img/sber-logo.svg'
import tinkoff from '../../../assets/img/tinkoff-logo.svg'
import bitcoin from '../../../assets/img/bitcoin-logo.svg'
import ethereum from '../../../assets/img/ethereum-logo.svg'
import dollar from '../../../assets/img/dollar-logo.svg'
import aed from '../../../assets/img/aed-logo.svg'

export const Form = () => {
    const path = '../../../assets/img/'
    const banks = [
        {
            name: 'Сбербанк RUB',
            img: sber,
            bg: '#C1FFB7'
        }, {
            name: 'Тинькофф RUB',
            img: tinkoff,
            bg: '#F3FF6D'
        }, {
            name: 'Bitcoin',
            img: bitcoin,
            bg: '#FFC56D'
        }, {
            name: 'Ethereum',
            img: ethereum,
            bg: '#D7D7D7'
        }, {
            name: 'Доллары',
            img: dollar,
            bg: '#C4FFBF'
        }, {
            name: 'Дирхамы',
            img: aed,
            bg: '#FFCBD5'
        },
    ]
    const [sendIndex, setSendIndex] = useState()
    const [receiveIndex, setReceiveIndex] = useState()
    const clickSend = (index) => {
        if (sendIndex !== undefined && index === receiveIndex) return;

        if (index !== sendIndex) setSendIndex(index)
    }
    const clickReceive = (index) => {
        if (receiveIndex !== undefined && index === sendIndex) return;

        if (index !== receiveIndex) setReceiveIndex(index)
    }

    return (
        <div id="form" className="grid_container__halved">
            <div className="grid_container__halved">
                <div className="column flex_container__column">
                    <div className="title">Отдаете</div>
                    {
                        banks.map((bank, index) =>
                            <button className={`bank_btn flex_container ${index === sendIndex && 'active_bank_btn'}`}
                                    onClick={() => clickSend(index)}
                            >
                                <div className="bank_base container__centered" style={{background: bank.bg}}>
                                    <img className="bank_img" src={bank.img}/>
                                </div>
                                <div className="bank_title">
                                    {bank.name}
                                </div>
                            </button>)
                    }
                </div>
                <div className="column flex_container__column">
                    <div className="title">Получаете</div>
                    {
                        banks.map((bank, index) =>
                            <button className={`bank_btn flex_container ${index === receiveIndex && 'active_bank_btn'}`}
                                    onClick={() => clickReceive(index)}>
                                <div className="bank_base container__centered" style={{background: bank.bg}}>
                                    <img className="bank_img" src={bank.img}/>
                                </div>
                                <div className="bank_title">
                                    {bank.name}
                                </div>
                            </button>)
                    }
                </div>
            </div>
            <div id="sending_form" className="flex_container__column column">
                <div className="title">Обмен</div>
                <div>
                    <div className="sending_form__container grid_container__halved">
                        <div className="sending_form__img-input">
                            {sendIndex !== undefined ?
                                <img className="dump" src={banks[sendIndex].img}/> :
                                <div className="dump"/>}
                            <input/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

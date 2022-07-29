import React, {useEffect, useState} from "react";
import useFetch from 'use-http'
import PhoneInput from 'react-phone-input-2'
import data from '../../../data.json'
import 'react-phone-input-2/lib/style.css'
import './form.scss';
import './adaptiveForm.scss';
import sber from '../../../assets/img/sber-logo.svg'
import tinkoff from '../../../assets/img/tinkoff-logo.svg'
import bitcoin from '../../../assets/img/bitcoin-logo.svg'
import ethereum from '../../../assets/img/ethereum-logo.svg'
import dollar from '../../../assets/img/dollar-logo.svg'
import aed from '../../../assets/img/aed-logo.svg'
import triangle from '../../../assets/img/triangle.svg'
import {SelectImg} from "../../components/SelectImg";

export const Form = () => {
    const headers = {
        "Access-Control-Allow-Origin": '*'
    }
    const useFetchWithHeaders = (req, opts) => useFetch(req, {...opts, headers});
    const {request, response} = useFetchWithHeaders(data.server_url)
    const banks = [
        {
            index: 0,
            text: 'Сбербанк RUB',
            icon: sber,
            bg: '#C1FFB7'
        }, {
            index: 1,
            text: 'Тинькофф RUB',
            icon: tinkoff,
            bg: '#F3FF6D'
        }, {
            index: 2,
            text: 'Bitcoin',
            icon: bitcoin,
            bg: '#FFC56D'
        }, {
            index: 3,
            text: 'Ethereum',
            icon: ethereum,
            bg: '#D7D7D7'
        }, {
            index: 4,
            text: 'Доллары',
            icon: dollar,
            bg: '#C4FFBF'
        }, {
            index: 5,
            text: 'Дирхамы',
            icon: aed,
            bg: '#FFCBD5'
        },
    ]
    // const [sendIndex, setSendIndex] = useState(0)
    // const [receiveIndex, setReceiveIndex] = useState(1)
    // const [sendAmount, setSendAmount] = useState(123)
    // const [receiveAmount, setReceiveAmount] = useState(123)
    // const [name, setName] = useState("lala")
    // const [phone, setPhone] = useState("324")
    // const [telegram, setTelegram] = useState("dasdas")
    // const [person, setPerson] = useState("Физилицо")
    // const [comment, setComment] = useState("comment")

    const [sendIndex, setSendIndex] = useState()
    const [receiveIndex, setReceiveIndex] = useState()
    const [sendAmount, setSendAmount] = useState()
    const [receiveAmount, setReceiveAmount] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [telegram, setTelegram] = useState()
    const [person, setPerson] = useState()
    const [comment, setComment] = useState()

    useEffect(() => {

    })

    async function onSubmit(e) {
        e.preventDefault();
        await request.post('/sendMail', {
            sendBank: banks[sendIndex].name,
            receiveBank: banks[receiveIndex].name,
            sendAmount,
            receiveAmount,
            name,
            phone,
            telegram,
            person,
            comment
        })
        if (response.ok) alert("super")
    }

    const clickSend = (index) => {
        if (sendIndex !== undefined && index === receiveIndex) return;

        if (index !== sendIndex) setSendIndex(index)
    }
    const clickReceive = (index) => {
        if (receiveIndex !== undefined && index === sendIndex) return;

        if (index !== receiveIndex) setReceiveIndex(index)
    }

    const handleName = event => {
        const result = event.target.value.replace(/[^a-zа-яё ]/gi, '');
        setName(result);
    };

    const handlePerson = title => {
        setPerson(title);
    }

    const handleSendAmount = (amount) => {
        setSendAmount(amount);
    }

    const handleReceiveAmount = (amount) => {
        setReceiveAmount(amount);
    }

    const handleSendBankIndex = (index) => {
        setSendIndex(index);
    }

    const handleReceiveBankIndex = (index) => {
        setReceiveIndex(index);
    }
    return (
        <div id="form" className="grid_container__halved">
            <div className="grid_container__halved">
                <div className="column flex_container__column desktop">
                    <div className="title ">Отдаете</div>
                    {
                        banks.map((bank, index) =>
                            <button className={`bank_btn flex_container ${index === sendIndex && 'active_bank_btn'}`}
                                    onClick={() => clickSend(index)}
                            >
                                <div className="bank_base container__centered" style={{background: bank.bg}}>
                                    <img className="bank_img" src={bank.icon}/>
                                </div>
                                <div className="bank_title">
                                    {bank.text}
                                </div>
                            </button>)
                    }
                </div>
                <div className="column flex_container__column desktop">
                    <div className="title">Получаете</div>
                    {
                        banks.map((bank, index) =>
                            <button className={`bank_btn flex_container ${index === receiveIndex && 'active_bank_btn'}`}
                                    onClick={() => clickReceive(index)}>
                                <div className="bank_base container__centered" style={{background: bank.bg}}>
                                    <img className="bank_img" src={bank.icon}/>
                                </div>
                                <div className="bank_title">
                                    {bank.text}
                                </div>
                            </button>)
                    }
                </div>
            </div>
            <div className="title mobile">Обмен</div>
            <form id="sending_form">
                <div className="title desktop">Обмен</div>
                <div>
                    <div className="grid_container__halved form_container">
                        <div className="sending_form__column">
                            <div className="sending_form__img-input desktop">
                                <div className="dump_container container__centered">
                                    {sendIndex !== undefined ?
                                        <img className="dump" src={banks[sendIndex].icon}/> :
                                        <div className="dump"/>}
                                </div>
                                <input
                                    value={sendAmount}
                                    type="number"
                                    min={1}
                                    required={true}
                                    tabIndex={0}/>
                            </div>
                            <div className="mobile select_inputs">
                                <div
                                    className="exchange_title ">Одаёте:<span>{sendIndex ? banks[sendIndex].text : ''}</span>
                                </div>
                                <SelectImg
                                    handleBankIndex={handleSendBankIndex}
                                    handleAmount={handleSendAmount}
                                    banks={banks}/>
                                <div
                                    className="exchange_title exchange_title_second">Получаете:<span>{receiveIndex ? banks[receiveIndex].text : ''}</span>
                                </div>
                                <SelectImg
                                    handleBankIndex={handleReceiveBankIndex}
                                    handleAmount={handleReceiveAmount}
                                    banks={banks}/>
                            </div>
                            <input placeholder="Имя"
                                   value={name}
                                   required={true}
                                   onChange={handleName}/>
                            <PhoneInput
                                required={true}
                                preferredCountries={['ru', 'kz', 'ua', 'ae']}
                                // placeholder="(999) 99-99-99"
                                country={'ru'}
                                value={phone}
                                classname="phone_input"
                                onChange={setPhone}/>
                            <input placeholder="Telegram"
                                   value={telegram}
                                   required={true}/>
                        </div>
                        <div className="sending_form__column sending_form__column_right">
                            <div className="flex_container desktop">
                                <img className="triangle" src={triangle}/>
                                <div className="sending_form__img-input">
                                    <div className="dump_container container__centered">
                                        {receiveIndex !== undefined ?
                                            <img className="dump" src={banks[receiveIndex].icon}/> :
                                            <div className="dump"/>}
                                    </div>
                                    <input
                                        className="no-left-border"
                                        value={banks[receiveIndex]?.text}
                                        // type="number"
                                        disabled={true}
                                        required={true}
                                        min={1}
                                        tabIndex={1}/>
                                </div>
                            </div>
                            <div className="flex_container">
                                <div className="radio_button first_radio_button">
                                    <input id="phys" required={true} type="radio" name="person"/>
                                    <label
                                        for="phys"
                                        onClick={() => handlePerson('физлицо')}
                                        className="first_radio_button">Физлицо</label>
                                </div>
                                <div className="radio_button ">
                                    <input id="ur" type="radio" name="person"/>
                                    <label
                                        for="ur"
                                        onClick={() => handlePerson('юрлицо')}
                                        className="second_radio_button">Юрлицо</label>
                                </div>
                            </div>
                            <textarea
                                placeholder={"Комментарий..."}
                                value={comment}/>
                        </div>

                    </div>
                    <button
                        onSubmit={onSubmit}
                        className="accent_button"
                    >Отправить заявку
                    </button>
                    <div className="agreement">Нажимая на кнопку «Отправить заявку», <span>вы соглашаетесь с
                        <a>правилами
                        обмена</a></span>
                    </div>
                </div>
            </form>
        </div>
    )

}

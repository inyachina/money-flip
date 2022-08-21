import React, {useState} from "react";
import useFetch from 'use-http'
import PhoneInput from 'react-phone-input-2'
import data from '../../../Data.json'
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
import {useAlert} from "react-alert";
import {CustomPopup} from "../../components/popup";
import anime from "animejs";

export const Form = () => {
    const alert = useAlert()
    const headers = {"Access-Control-Allow-Origin": '*'}
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

    const [sendIndex, setSendIndex] = useState()
    const [sendAmount, setSendAmount] = useState()
    const [account, setAccount] = useState()
    const [name, setName] = useState()
    const [phone, setPhone] = useState()
    const [telegram, setTelegram] = useState()
    const [person, setPerson] = useState()
    const [comment, setComment] = useState()

    async function onSubmit(e) {
        e.preventDefault();

        handleSuccess();
        if (!name || !phone) {
            alert.show('Укажите имя и номер телефона')
            return
        }

        await request.post('/sendMail', {
            sendBank: banks[sendIndex]?.text,
            sendAmount,
            account,
            name,
            phone,
            telegram,
            person,
            comment
        })
        if (response.ok) handleSuccess();
    }

    const handleSuccess = () => {
         anime({
            targets: '#custom_popup',
            opacity: 1,
        }, '=0')
        setTimeout(()=> document.getElementById("custom_popup").style.opacity = 0, 3000)

    }

    const handleName = event => {
        const result = event.target.value.replace(/[^a-zа-яё ]/gi, '');
        setName(result);
    };

    const handlePerson = title => {
        setPerson(title);
    }
    const handleSendAmount = (event) => {
        setSendAmount(event.target.value);
    }
    const handleSendIndex = (index) => {
        setSendIndex(index);
    }

    const handleTelegram = (event) => {
        setTelegram(event.target.value);
    }

    const handleComment = (event) => {
        setComment(event.target.value);
    }
    const handleAccount = (event) => {
        setAccount(event.target.value);
    }

    return (
        <div id="form">
            <CustomPopup/>
            <div className="column flex_container__column desktop">
                <div className="title ">Отдаете</div>
                {
                    banks.map((bank, index) =>
                        <button className={`bank_btn flex_container ${index === sendIndex && 'active_bank_btn'}`}
                                onClick={() => handleSendIndex(index)}
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
            <div className="title mobile">Детали перевода</div>
            <form id="sending_form">
                <div className="title desktop">Детали перевода</div>
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
                                    name={"desktop_sum"}
                                    placeholder={'Сумма'}
                                    onChange={handleSendAmount}
                                    value={sendAmount}
                                    type="number"
                                    min={1}
                                    required={true}
                                />
                            </div>
                            <div className="mobile select_inputs">
                                <div
                                    className="exchange_title ">Одаёте:<span>{sendIndex ? banks[sendIndex].text : ''}</span>
                                </div>
                                <SelectImg
                                    handleBankIndex={handleSendIndex}
                                    handleAmount={handleSendAmount}
                                    banks={banks}/>
                            </div>
                            <div className="flex_container mobile">
                                <input
                                    className="iban_input"
                                    value={account}
                                    onChange={handleAccount}
                                    placeholder={'IBAN или номер счета'}
                                />
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
                                   onChange={handleTelegram}
                                   required={true}
                            />
                        </div>
                        <div className="sending_form__column sending_form__column_right">
                            <div className="flex_container desktop">
                                <img className="triangle" src={triangle}/>
                                <input
                                    className="iban_input"
                                    value={account}
                                    placeholder={'IBAN или номер счета'}
                                    required={true}
                                    onChange={handleAccount}
                                />
                            </div>
                            <div className="flex_container">
                                <div className="radio_button first_radio_button">
                                    <input id="phys"
                                           required={true}
                                           type="radio"
                                           name="person"/>
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
                                onChange={handleComment}
                                value={comment}/>
                        </div>

                    </div>
                    <button
                        type={"submit"}
                        onClick={onSubmit}
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

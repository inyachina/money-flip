import React, {useEffect} from "react";
import './aboutUs.scss'
import rus from '../../../src/assets/img/russia_office.jpg'
import dubai from '../../../src/assets/img/dubai_office.jpg'

export const AboutUsPage = () => {
    const infos = [
        {
            title: 'Идея создания сервиса',
            text: 'Мы хотели создать простой и удобный сервис для международных бизнес-переводов на фоне проблем и ограничений в банковском секторе: платежи идут до 3-х дней, требуют большого количества документов, а часто и вовсе отменяются.',
        }, {
            title: 'Наша основная миссия',
            text: 'Это предоставление комплексного решения сопровождение сделок и создания новых возможностей для комфортного путешествия и развития бизнеса за рубежом. За счет прямого сотрудничества с валютными биржами и банками в ОАЭ мы предлагаем самый выгодный курс оплаты.'
        }, {
            title: '10+ лет опыта',
            text: 'Наша команда имеет более 10 лет опыта развития финтех сервисов в России и на зарубежных рынков. Мы постоянно работаем над улучшением сервиса и добавлением новых валютных пар (тенге, лира и евро), а также над выпуском собственных банковских карт в партнерстве с местными финансовыми платежными системами.'
        },
    ]
    useEffect(()=>{
        document.title = "MoneyFlip | О нас"
    })
    return <div id="aboutUs">
        <div className="t2 title">MoneyFlip — это современный сервис <br className="desktop"/> международных <br className="extra_small_mobile"/>  бизнес-переводов</div>
        <div className="info_columns">
            {infos.map((info) => (
                <div className="info_column">
                    <div className="info_columns_title">
                        {info.title}
                    </div>
                    <div className="text">
                        {info.text}
                    </div>
                </div>))}
        </div>
        <div className="photos grid_container__halved">
            <div className="flex_container__column_start">
                <img src={dubai} className="dubai"/>
                <div className="sub_title">Офис в ОАЭ <span>Horizon Tower, Дубай</span></div>
            </div>
            <div className="flex_container__column_start">
                <img src={rus} className="rus"/>
                <div className="sub_title">Офис в России<span>БЦ «Ситилинк», Санкт-Петербург</span></div>
            </div>
        </div>
    </div>
}

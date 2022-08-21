import React, {useEffect} from "react";
import {About} from "./about/About";
import {Form} from "./form/Form";

export const MainPage = () => {

    useEffect(() => {
        document.title = "MoneyFlip | Платежи для бизнеса"
    })

    return (
        <>
            <About/>
            <Form/>
        </>
    )
}

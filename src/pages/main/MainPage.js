import React from "react";
import {About} from "./about/About";
import {Form} from "./form/Form";
import {Clients} from "./clients/Clients";

export const MainPage = () =>{
    return(
        <>
            <About/>
            <Form/>
            <Clients/>
        </>
    )
}

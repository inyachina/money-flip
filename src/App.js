import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Header} from "./common/header/Header";
import {Footer} from "./common/footer/Footer";
import {MainPage} from "./pages/main/MainPage";
import {AboutUsPage} from "./pages/about_us/AboutUsPage";
import {NotFoundPage} from "./pages/not_found/NotFoundPage";
import {positions, Provider as AlertProvider, transitions} from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'

function App() {
    const alertOptions = {
        position: positions.BOTTOM_CENTER,
        timeout: 3000,
        offset: '30px',
        transition: transitions.SCALE
    }

    return (
        <div className="App">
            <AlertProvider template={AlertTemplate} {...alertOptions}>
                <Header/>
                <BrowserRouter>
                    <Routes>
                        <Route exact path="/" element={<MainPage/>}/>
                        <Route exact path="/aboutUs" element={<AboutUsPage/>}/>
                        <Route path="*" element={<NotFoundPage/>}/>
                    </Routes>
                </BrowserRouter>
                <Footer/>

            </AlertProvider>
        </div>
    );
}

export default App;

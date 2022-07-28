import React from "react";
import * as ReactDOM from "react-dom";
import {BrowserRouter, HashRouter, Route, Routes} from "react-router-dom";
import {Header} from "./common/header/Header";
import {Footer} from "./common/footer/Footer";
import {MainPage} from "./pages/main/MainPage";
import {AboutUsPage} from "./pages/about_us/AboutUsPage";
import {NotFoundPage} from "./pages/not_found/NotFoundPage";
import {SelectImg} from "./pages/components/SelectImg";

function App() {
    return (
        <div className="App">
            <Header/>
            <BrowserRouter>
                <Routes>
                    <Route exact  path="/" element={<MainPage/>}/>
                    <Route exact  path="/aboutUs" element={<AboutUsPage/>}/>
                    <Route   path="*" element={<NotFoundPage/>}/>
                </Routes>
                </BrowserRouter>
            <Footer/>
        </div>
    );
}

export default App;

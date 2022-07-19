import React from "react";
import {Header} from "./common/header/Header";
import {About} from "./pages/main/about/About";
import {Form} from "./pages/main/form/Form";

function App() {
    return (
        <div className="App">
            <Header/>
            <About/>
            <Form/>
        </div>
    );
}

export default App;

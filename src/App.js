import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import ClientApp from "./apps/client/ClientApp";
import AboutApp from "./apps/about/AboutApp";
import ErrorApp from "./apps/ErrorApp";
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

export default function App() {

    return (

        <Router>

            <NavigationBar/>

            <Routes>

                <Route path="/about/:username" element={<AboutApp/>}/>

                <Route path="/" element={<ClientApp/>}/>

                <Route path="*" element={<ErrorApp/>}/>

            </Routes>

        </Router>
    );
}

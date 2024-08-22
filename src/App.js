import './App.css';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Footer from "./components/Footer/Footer";
import {Route, Routes} from "react-router-dom";
import Services from "./pages/Services/Services";

function App() {
    return (
        <>
            <div className="app">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/about-us" element={<Home/>}/>
                    <Route path="/services" element={<Services/>}/>
                    <Route path="/order" element={<Home/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    )
}

export default App;

import './App.css';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React from "react";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;

import './App.css';
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import React from "react";

function App() {
    return (
        <div className="app">
            <Navbar />
            <Home/>
        </div>
    );
}

export default App;

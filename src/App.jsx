import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import "./App.css";

function App() {
    return (
        <>
            <Header />
            <Products />
            <div className="view-all-products">
                <button className="view-all-button">View all products</button>
            </div>
        </>
    );
}

export default App;

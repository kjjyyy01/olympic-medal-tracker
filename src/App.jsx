import "./App.css";
import React, { useState } from "react";
import CountryForm from "../components/CountryForm";
import CountryTable from "../components/CountryTable";

const App = () => {
    const [countries, setCountries] = useState([]);

    return (
        <div id="container">
            <header className="header-container">
                <h1 className="title">2024 Paris Olympic</h1>
                <CountryForm countries={countries} setCountries={setCountries} />
            </header>
            <main className="main-container">
                <CountryTable countries={countries} setCountries={setCountries} />
            </main>
        </div>
    );
};

export default App;

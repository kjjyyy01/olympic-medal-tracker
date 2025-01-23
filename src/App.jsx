import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
    const tbodyTitle = ["Country Name", "Gold", "Silver", "Bronze", "Delete"];

    const [countries, setCountries] = useState([]);

    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const addCountryHandler = () => {
        const newCountry = {
            id: uuid(),
            countryName: countryName,
            gold: gold,
            silver: silver,
            bronze: bronze,
        };
        if (countries.some((c) => c.countryName === newCountry.countryName)) {
            alert("중복된 국가는 추가할 수 없습니다.");
            return;
        }
        setCountries([newCountry, ...countries]);
    };

    const deleteCountryHandler = (id) => {
        const deleteCountry = countries.filter((country) => {
            return country.id != id;
        });
        setCountries(deleteCountry);
    };

    const countryNameHandler = (e) => {
        setCountryName(e.target.value);
    };
    const goldHandler = (e) => {
        setGold(e.target.value);
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setGold("");
            return;
        }
    };
    const silverHandler = (e) => {
        setSilver(e.target.value);
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setSilver("");
            return;
        }
    };
    const bronzeHandler = (e) => {
        setBronze(e.target.value);
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setBronze("");
            return;
        }
    };

    return (
        <div id="container">
            <header className="header-container">
                <h1 className="title">2024 Paris Olympic</h1>
                <form onSubmit={addCountryHandler}>
                    <div>
                        <label htmlFor="">Country Name</label>
                        <input value={countryName} onChange={countryNameHandler} type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Gold</label>
                        <input value={gold} onChange={goldHandler} type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Silver</label>
                        <input value={silver} onChange={silverHandler} type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Bronze</label>
                        <input value={bronze} onChange={bronzeHandler} type="number" />
                    </div>
                </form>
                <Button onClick={addCountryHandler}>Add</Button>
                <Button>Update</Button>
            </header>
            <main className="main-container">
                <table className="table" cellSpacing="0">
                    <thead>
                        <tr>
                            {tbodyTitle.map((title) => {
                                return <th key={title}>{title}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => {
                            return (
                                <CountryRow
                                    key={country.id}
                                    country={country}
                                    deleteCountryHandler={deleteCountryHandler}
                                />
                            );
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default App;

const CountryRow = ({ country, deleteCountryHandler }) => {
    const { id, countryName, gold, silver, bronze } = country;
    return (
        <tr>
            <td>{countryName}</td>
            <td>{gold}</td>
            <td>{silver}</td>
            <td>{bronze}</td>
            <td>
                <Button onClick={() => deleteCountryHandler(id)}>Delete</Button>
            </td>
        </tr>
    );
};

const Button = ({ children, onClick }) => {
    return <button onClick={onClick}>{children}</button>;
};

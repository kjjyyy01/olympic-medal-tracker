import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
    const tbodyTitle = ["Country Name", "Gold", "Silver", "Bronze", "Delete"];

    const [countries, setCountries] = useState([]);
    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const updateCountryHandler = () => {
        const countryIndex = countries.findIndex((c) => c.countryName === countryName);

        if (countryIndex === -1) {
            alert("해당 국가가 목록에 없습니다.");
            return;
        }

        const updatedCountries = [...countries];

        updatedCountries[countryIndex] = {
            ...updatedCountries[countryIndex],
            gold: parseInt(gold, 10),
            silver: parseInt(silver, 10),
            bronze: parseInt(bronze, 10),
        };

        setCountries(updatedCountries);

        setCountryName("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    const addCountryHandler = () => {
        const newCountry = {
            id: uuid(),
            countryName: countryName,
            gold: gold,
            silver: silver,
            bronze: bronze,
        };
        if ([countryName, gold, silver, bronze].some((element) => element.length === 0)) {
            alert("정보가 입력되지 않았습니다.");
            return;
        }
        if (countries.some((c) => c.countryName === newCountry.countryName)) {
            alert("중복된 국가는 추가할 수 없습니다.");
            return;
        }
        setCountries([newCountry, ...countries]);
        setCountryName("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    const deleteCountryHandler = (id) => {
        const deleteCountry = countries.filter((country) => {
            return country.id != id;
        });
        setCountries(deleteCountry);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <form onSubmit={handleSubmit}>
                    <div>
                        <label id="Country Name">
                            Country
                            <input id="Country Name" value={countryName} onChange={countryNameHandler} type="text" />
                        </label>
                    </div>
                    <div>
                        <label id="Gold">
                            Gold
                            <input id="Gold" value={gold} onChange={goldHandler} type="number" />
                        </label>
                    </div>
                    <div>
                        <label id="Silver">
                            Silver
                            <input value={silver} onChange={silverHandler} type="number" />
                        </label>
                    </div>
                    <div>
                        <label id="Bronze">
                            Bronze
                            <input value={bronze} onChange={bronzeHandler} type="number" />
                        </label>
                    </div>
                </form>
                <Button onClick={addCountryHandler}>Add</Button>
                <Button onClick={updateCountryHandler}>Update</Button>
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

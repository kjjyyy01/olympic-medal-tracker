import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const App = () => {
    const tbodyTitle = ["Country Name", "Gold", "Silver", "Bronze", "Delete"];
    const [talk, setTalk] = useState("추가된 정보가 없습니다.");
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
        setCountries([...countries, newCountry]);
        setTalk("");
    };
    const deleteCountryHandler = (id) => {
        const deleteCountry = countries.filter((country) => {
            return country.id != id;
        });
        setCountries(deleteCountry);
    };

    return (
        <div id="container">
            <header className="header-container">
                <h1 className="title">2024 Paris Olympic</h1>
                <div>
                    <label htmlFor="">Country Name</label>
                    <input
                        value={countryName}
                        onChange={(e) => {
                            setCountryName(e.target.value);
                        }}
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="">Gold</label>
                    <input
                        value={gold}
                        onChange={(e) => {
                            setGold(e.target.value);
                            if (e.target.value < 0) {
                                alert("음수는 사용할 수 없습니다.");
                                setGold("");
                                return;
                            }
                        }}
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="">Silver</label>
                    <input
                        value={silver}
                        onChange={(e) => {
                            setSilver(e.target.value);
                            if (e.target.value < 0) {
                                alert("음수는 사용할 수 없습니다.");
                                setSilver("");
                                return;
                            }
                        }}
                        type="number"
                    />
                </div>
                <div>
                    <label htmlFor="">Bronze</label>
                    <input
                        value={bronze}
                        onChange={(e) => {
                            setBronze(e.target.value);
                            if (e.target.value < 0) {
                                alert("음수는 사용할 수 없습니다.");
                                setBronze("");
                                return;
                            }
                        }}
                        type="number"
                    />
                </div>
                <Button onClick={addCountryHandler}>Add</Button>
                <Button>Update</Button>
            </header>
            <main className="main-container">
                {talk ? (
                    <p>{talk}</p>
                ) : (
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
                                        deleteCountryHandler={
                                            deleteCountryHandler
                                        }
                                    />
                                );
                            })}
                        </tbody>
                    </table>
                )}
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

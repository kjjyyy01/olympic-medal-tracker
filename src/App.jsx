import React from "react";

const App = () => {
    const medalColor = ["Gold", "Silver", "Bronze"];
    const tbodyTitle = ["Country Name", "Gold", "Silver", "Bronze", "Delete"];
    const countries = [
        {
            country: "대한민국",
            gold: 10,
            silver: 10,
            bronze: 10,
        },
        {
            country: "프랑스",
            gold: 3,
            silver: 5,
            bronze: 6,
        },
        {
            country: "영국",
            gold: 1,
            silver: 2,
            bronze: 3,
        },
    ];
    return (
        <div id="container">
            <header className="header-container">
                <h1 className="title">2024 Paris Olympic</h1>
                <div>
                    <label htmlFor="">Country Name</label>
                    <input type="text" />
                </div>
                {medalColor.map((color) => {
                    return (
                        <div key={color}>
                            <label htmlFor="">{color}</label>
                            <input type="number" />
                        </div>
                    );
                })}
                <button>Add</button>
                <button>Update</button>
            </header>
            <main className="main-container">
                <table className="table" cellSpacing="0">
                    <thead>
                        <tr>
                            {tbodyTitle.map((title) => {
                                return <th>{title}</th>;
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {countries.map((country) => {
                            return <County country={country} />;
                        })}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default App;

const { country, gold, silver, bronze } = country;

const County = ({ country }) => {
    return (
        <tr>
            <td>{country}</td>
            <td>{gold}</td>
            <td>{silver}</td>
            <td>{bronze}</td>
            <td>
                <button>Delete</button>
            </td>
        </tr>
    );
};

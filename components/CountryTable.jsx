import React from "react";
import Button from "./Button";

const CountryTable = ({ countries, setCountries }) => {
    const tbodyTitle = ["Country Name", "Gold", "Silver", "Bronze", "Delete"];

    //목록에 추가된 항목을 id값을 비교해서 삭제시키는 로직
    const deleteCountryHandler = (id) => {
        const deleteCountry = countries.filter((country) => {
            return country.id != id;
        });
        setCountries(deleteCountry);
    };

    return (
        <table className="table">
            {countries.length > 0 ? (
                <thead>
                    <tr>
                        {tbodyTitle.map((title) => (
                            <th key={title}>{title}</th>
                        ))}
                    </tr>
                </thead>
            ) : null}
            <tbody>
                {countries.map((country) => {
                    return (
                        <tr key={country.id}>
                            <td>{country.countryName}</td>
                            <td>{country.gold}</td>
                            <td>{country.silver}</td>
                            <td>{country.bronze}</td>
                            <td>
                                <Button onClick={() => deleteCountryHandler(country.id)}>Delete</Button>
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
};

export default CountryTable;

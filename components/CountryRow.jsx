import React from "react";

const CountryRow = ({ country, deleteCountryHandler, Button }) => {
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

export default CountryRow;

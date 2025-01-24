import React from "react";

//*국가 데이터를 테이블 행으로 표시하고 삭제 버튼 기능을 제공
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

import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import Button from "./Button";

const CountryForm = ({ countries, setCountries }) => {
    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    //입력한 값으로 목록에 추가시켜주는 함수
    const addCountryHandler = () => {
        const newCountry = {
            id: uuid(),
            countryName: countryName,
            gold: gold,
            silver: silver,
            bronze: bronze,
        };

        //정보가 입력되지 않으면 알람을 띄워주는 로직
        if ([countryName, gold, silver, bronze].some((element) => element.length === 0)) {
            alert("정보가 입력되지 않았습니다.");
            return;
        }
        //중복된 국가를 추가하려고 하면 알람을 띄워주는 로직
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

    //원래있던 리스트에 대한 매달 개수를 업데이트 시켜주는 함수
    const updateCountryHandler = () => {
        const countryIndex = countries.findIndex((c) => c.countryName === countryName);

        if (countryIndex === -1) {
            alert("해당 국가가 목록에 없습니다.");
            return;
        }

        const updatedCountries = [...countries];

        updatedCountries[countryIndex] = {
            ...updatedCountries[countryIndex],
            gold: parseInt(gold, 10) || 0,
            silver: parseInt(silver, 10) || 0,
            bronze: parseInt(bronze, 10) || 0,
        };

        setCountries(updatedCountries);

        setCountryName("");
        setGold(0);
        setSilver(0);
        setBronze(0);
    };

    const countryNameHandler = (e) => {
        setCountryName(e.target.value);
    };
    const goldHandler = (e) => {
        setGold(+e.target.value);
        //메달 개수에 음수를 넣으면 알람을 띄워주는 로직
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setGold("");
            return;
        }
    };
    const silverHandler = (e) => {
        setSilver(+e.target.value);
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setSilver("");
            return;
        }
    };
    const bronzeHandler = (e) => {
        setBronze(+e.target.value);
        if (e.target.value < 0) {
            alert("음수는 사용할 수 없습니다.");
            setBronze("");
            return;
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Country
                <input value={countryName} onChange={countryNameHandler} type="text" />
            </label>
            <label>
                Gold
                <input value={gold} onChange={goldHandler} type="number" />
            </label>
            <label>
                Silver
                <input value={silver} onChange={silverHandler} type="number" />
            </label>
            <label>
                Bronze
                <input value={bronze} onChange={bronzeHandler} type="number" />
            </label>
            <Button onClick={addCountryHandler}>Add</Button>
            <Button onClick={updateCountryHandler}>Update</Button>
        </form>
    );
};

export default CountryForm;

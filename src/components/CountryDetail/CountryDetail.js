import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import CountryDetailInfo from '../CountryDetailInfo/CountryDetailInfo';

const CountryDetail = () => {
    const {countryName} = useParams();
    const [countryInfo, setCountryInfo] = useState([]);

    useEffect(() => {
        const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setCountryInfo(data));
    }, [countryName]);
    // console.log(countryInfo)
    return (
        <div className="m-5">
            {
                countryInfo.map(info => <CountryDetailInfo key={info.alpha3Code} info = {info}></CountryDetailInfo>)
            }
        </div>
    );
};

export default CountryDetail;
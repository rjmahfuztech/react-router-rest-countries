import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Home.css';

const Home = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const url = 'https://restcountries.eu/rest/v2/all';
        fetch(url)
        .then(res => res.json())
        .then(data => setCountries(data))
    }, []);
    // console.log(countries);
    return (
        <div className="home-style">
            {
                countries.map(country => <Country key={country.alpha2Code} country={country}></Country>)
            }
        </div>
    );
};

export default Home;
import React, { useEffect, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div>
            <h2 className='heading'>Visit The World</h2>
            <h3 className='count'>Available Countries: {countries.length}</h3>
            <div className='single-country'>
                {
                    countries.map(country => <Country
                        country={country} key={country.cca3}
                    ></Country>)
                }
            </div>
        </div>
    );
};
export default Countries;
import React from 'react';
import './Country.css'

const Country = (props) => {
    // console.log(props);
    const { name, area, population, flags } = props.country;
    return (
        <div className='country'>
            <h2 className='name'>{name.common}</h2>
            <img src={flags.png} className="flag" alt="" />
            <h4>Population: <span className='population'>{population}</span> </h4>
            <p>Area: {area}</p>
        </div>
    );
};

export default Country;
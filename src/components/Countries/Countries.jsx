import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {


    // Hold data with useState
    const [country, setCountry] = useState([]);

    // Load data with useEffect
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])
    return (
        <div>
            <h2>Countries: {country.length}</h2>

            {/* Maping daynamic data. */}
            <div className="countries_container">
                {
                    country.map(country => <Country key={country.cca3} country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
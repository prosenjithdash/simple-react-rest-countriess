import { useEffect, useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {

    // 40-5 Conditional CSS And Conditional Style
    // visited hold state
    const [visitedCountries, setVisitedCountries] = useState([]);

    // 40-7 (Recap) Lift Up The State Recap For Visited Flags

    // flage state hold flags data
    const [visitedFlags, setVisitedFlags] = useState([]);

    // visited handle
    const handleVisitedCountry = (country) => {
        console.log('Add visited list.')
        console.log(country)

        // 40-6 (Advanced) Updating State In Arrays And Pass Parameter
        // visitedCountries.push(country) // do not work that
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    // 40-7 (Recap) Lift Up The State Recap For Visited Flags
    // flags handle data
    const handleVisitedFlag = (flag) => {
        console.log('Add flag')
        // console.log(flag)

        const newVisitedFlag = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlag);
        
    }





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

            {/* 40-6 (Advanced) Updating State In Arrays And Pass Parameter */}
            {/* Visited countries list */}
            <div>
                <h3>Visited Countries: {visitedCountries.length} </h3>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{ country.name.common}</li> )
                    }
                </ul>
            </div>

             {/* 40-7 (Recap) Lift Up The State Recap For Visited Flags */}
            {/* Display flag  */}
            <div className="flag_container">
                {
                    visitedFlags.map((flag,idx) => <img key={idx} src={flag} alt="" /> )
                }
            </div>

            {/* Maping daynamic data. */}
            <div className="countries_container">
                {
                    country.map(country =>
                        <Country
                        key={country.cca3}
                        country={country}
                            
                         //  40-5 Conditional CSS And Conditional Style with handle props
                            handleVisitedCountry={handleVisitedCountry}
                        //  40-7 (Recap) Lift Up The State Recap For Visited Flags 
                        handleVisitedFlag={handleVisitedFlag}
                        >  
                    </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;
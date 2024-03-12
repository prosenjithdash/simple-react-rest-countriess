import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;

    /* 40-4 Toggle State Based On Click And Conditional Rending */

    // useState use data hold for visited or not
    const [visited, setVisited] = useState(false)

    // eventHandler with toggle useState
    const handleVisited = () => {
        setVisited(!visited);
    }


    return (
        <div className='country'>

            {/* 40-2 Display Countries In A Simple Way, Folder Structure */}
            <img src={flags.png } alt="" />
            <p>Name:{name?.common}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>

            {/* /* 40-4 Toggle State Based On Click And Conditional Rending */ }

            {/* <button onClick={handleVisited}>Visited</button> */}
            <button onClick={handleVisited}>{visited ? 'Visited': 'Going'}</button>


            {/* Conditional Rending */}
            {
                visited && 'I have visited this country.'
            }
        </div>
    );
};

export default Country;
import { useState } from 'react';
import './Country.css'

const Country = ({ country, handleVisitedCountry, handleVisitedFlag }) => {
    const { name, flags, population, area, cca3 } = country;

    /* 40-4 Toggle State Based On Click And Conditional Rending */

    // useState use data hold for visited or not
    //hold
    const [visited, setVisited] = useState(false)

    // eventHandler with toggle useState
    // handle
    const handleVisited = () => {
        setVisited(!visited);
    }


    // console.log(handleVisitedCountry)
    // console.log(handleVisitedFlag)

    return (

        //40-5 Conditional CSS And Conditional Style
        // added class when visited
        <div className={`country ${visited && 'visited'}`}>

            {/* 40-2 Display Countries In A Simple Way, Folder Structure */}
            <img className='image_width' src={flags.png } alt="" />
            <p style={{fontSize:'25px,bold'}}>{name?.common}</p>
            <p>Population:{population}</p>
            <p>Area:{area}</p>
            <p>Code:{cca3}</p>

            {/* /* 40-4 Toggle State Based On Click And Conditional Rending */ }

            {/* <button onClick={handleVisited}>Visited</button> */}
            {/* Tiger */}
            <button className='visited_btn' onClick={handleVisited}>{visited ? 'Visited' : 'Visit'}</button> 
           

            {/* Conditional Rending */}
            {
                visited && 'I have visited this country.'
            }

            <br /> <br />


            {/* 40-5 Conditional CSS And Conditional Style */}
            {/* Mark as Visited */}
            {/* 40-6 (Advanced) Updating State In Arrays And Pass Parameter */}
            <button onClick={() => handleVisitedCountry(country)} className='visited_btn'>Mark Visited</button> <br /> <br />
            
          
            <button onClick={() => handleVisitedFlag(country.flags.png)} className='visited_btn'>Add Flag</button>


        </div>
    );
};

export default Country;
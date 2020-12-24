import React, { useState, useEffect } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function Strains({match}) {
    useEffect(() => {
        fetchStrain();
    },[]);

    const [strain, setStrain] = useState([]);

    const fetchStrain = async () => {
        const apiKey = 'H9bsmkt';
        const data = await fetch(
            `https://strainapi.evanbusse.com/${apiKey}/strains/search/effect/${match.params.id}`
        )

        let wheatStrain = await data.json();
        console.log(wheatStrain);
        setStrain(wheatStrain);
    };
  
    return (
        <div>
            <h1><u>Strains</u></h1>
            {strain.map(wheat => (
                <h1 key={wheat.id}>
                    <Link to={`/strains/${wheat.id}`}>{wheat.name}</Link>
                </h1>
            ))};
        </div>
    );
}

export default Strains;

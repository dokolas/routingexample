import React, { useState, useEffect } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function StrainsDetail({match}) {
    useEffect(() => {
        fetchStrain();
    },[]);

    const [strain, setStrain] = useState({});

    const fetchStrain = async () => {
        const apiKey = 'H9bsmkt';
        const data = await fetch(
            `https://strainapi.evanbusse.com/${apiKey}/strains/data/desc/${match.params.id}`
        )

        let wheatStrain = await data.json();
        console.log(wheatStrain);
        setStrain(wheatStrain);
    };
  
    return (
        <div>
            <h1><u>Strains</u></h1>
            {strain.desc};
        </div>
    );
}

export default StrainsDetail;

import React, { useState, useEffect } from 'react';
import '../../App.css';
import {Link} from 'react-router-dom';

function Effects() {
    useEffect(() => {
        fetchItems();
    },[]);

    const [effect, setEffect] = useState([]);

    const fetchItems = async () => {
        const apiKey = 'H9bsmkt';
        const data = await fetch(
            `https://strainapi.evanbusse.com/${apiKey}/searchdata/effects`
        )

        let effects = await data.json();
        console.log(effects);
        setEffect(effects);
    };
  
    return (
        <div>
            <h1 className='Effect-Header'><u>Effects of Wheat</u></h1>
            {effect.map(feeling => (
                <h1 key={feeling.effect}>
                    <Link to={`/effects/${feeling.effect}`}>{feeling.effect}</Link>
                </h1>
            ))}
        </div>
    );
}

export default Effects;

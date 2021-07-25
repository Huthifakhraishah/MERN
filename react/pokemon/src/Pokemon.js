import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Pokemon = (props) => {
    const [pokeData, setPokeData] = useState([]);
    const onClick = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(response =>{
            setPokeData(response.data.results);
        })
        .catch(error => console.log(error));
    };
    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {pokeData.map((poke, i) =>
                <p key={i}>{poke.name}</p>
            )}
        </div>
    )
}
export default Pokemon;




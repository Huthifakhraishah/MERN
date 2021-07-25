import React, {useState, useEffect} from 'react';
const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);
    const onClick = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(response => {
            return response.json();
        })
        .then(response =>{
            setPoke(response.results);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <button onClick={onClick}>Fetch Pokemon</button>
            {poke.map((mon, i) =>(
                <p key={i}>{mon.name}</p>
            ))}
        </div>
    );
}
export default Pokemon;
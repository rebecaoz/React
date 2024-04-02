import React, { useState, useEffect} from 'react'
import './fetchButton.css'
import axios from 'axios'

const FetchButton = () =>{

    const [pokemons, setPokemons] = useState([])

    const obtenerPokemon = async () => {
        try {
          const response = await axios.get(
            `https://pokeapi.co/api/v2/pokemon?offset=20&limit=807`
          );
          setPokemons(response.data.results);
        } catch (e) {
          setPokemons({});
        }
    };
    /*
    useEffect(()=>{
        fetch("https://pokeapi.co/api/v2/pokemon")
          .then(response => response.json())
          .then(data => {
            //console.log(data);
            setPokemons(data.results);
            //console.log(response.results)
           });
    }, []);*/

    //https://pokeapi.co/
    return(
        <div className='list'>
            <button className='btn btn-primary' onClick={obtenerPokemon}>Fetch Pokemon</button>
            {pokemons.map(element=>{
                return(
                    <li className='poke-item'>{element.name}</li>
                );
            })}
        </div>
    );
};

export default FetchButton
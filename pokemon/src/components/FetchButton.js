import { useState} from 'react'
import './fetchButton.css'

const FetchButton = () =>{

    const [pokemons, setPokemons] = useState([])

    const obtenerPokemon = async () => {
        try {
          const response = await fetch(
            `https://pokeapi.co/api/v2/pokemon?offset=20&limit=807`
          );
          const data = await response.json();
          setPokemons(data.results);
          console.log(data);
        } catch (e) {
          setPokemons(undefined);
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
            <button onClick={obtenerPokemon}>Fetch Pokemon</button>
            {pokemons.map(element=>{
                return(
                    <li className='poke-item'>{element.name}</li>
                );
            })}
        </div>
    );
};

export default FetchButton
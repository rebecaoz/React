import React, {useEffect, useState} from 'react';
import axios from "axios";
import { useParams } from "react-router-dom";

const People = (props) =>{

    const params = useParams();
    //console.log(params)
    const [result, setResult] = useState([]);
    const [world, setWorld] = useState([]);
    


    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${params.id}/`)
             
             .then( response => setResult(response.data) )
             .catch( err => console.log(err));
    },[params.id])

    useEffect(()=>{
        axios.get(`https://swapi.dev/api/planets/${params.id}/`)
             .then( response => setWorld(response.data) )
             .catch( err => console.log("Estos no son los droides que está buscando"));
    },[params.id])


    console.log(result);

    if (!result) {
        return "Loading...";
      }
    
    return (
        <div>
            <h2>Name: {result.name}</h2>
            <p>Gender: {result.gender}</p>
            <p>Homeworld: {world.name}</p>
        </div>
    )

}
export default People
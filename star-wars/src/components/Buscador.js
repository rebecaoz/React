import React, { useState } from 'react';
import { useNavigate} from "react-router-dom";
import './buscador.css'

const Buscador = ()=>{

  const [type, setType] = useState("people");
  const [selectedId, setSelectedId] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    //console.log(type);
    //console.log(selectedId);
    navigate(`/${type}/${selectedId}`)
  }

  
  return(
    <div>
        <form onSubmit={handleSubmit}>
            <label className='searchLabel'>Search for:</label>
            <select value={type} onChange={e=>setType(e.target.value)}>
                <option value="people">People</option>
                <option value="films">Films</option>
                <option value="ships">Starships</option>
                <option value="vehicles">Vehicles</option>
                <option value="species">Species</option>
                <option value="planets">Planets</option>
            </select>
            <label className='idLabel'>Id</label>
            <input type='number' value={selectedId} onChange={e=>setSelectedId(e.target.value)}/>
            <button>Search</button>
        </form>
    </div>
  );
  
}
export default Buscador
import { useState } from "react";

const Home = (props) => { 
    const [text, setText] = useState('');

    return (
      <div>
        <h1 style={{color: "red"}}>Bienvenido!</h1>
        <input type="text" name="route" onChange={(e)=>setText(e.target.value)}/>
        <button>Ir</button>
      </div>
      
      
    );
};
export default Home
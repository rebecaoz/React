import { useState } from "react";
import { useNavigate} from "react-router-dom";


const Home = (props) => { 
    const [text, setText] = useState('');
    const navigate = useNavigate();
    
    const ir = () =>{
      
      navigate("/"+text);
      
    }    
    return (
      <div>
        <h1 style={{color: "red"}}>Bienvenido!</h1>
        <input type="text" name="route" onChange={(e)=>setText(e.target.value)}/>
        <button onClick={ir}>Ir</button>
      </div>
      
      
    );
};
export default Home
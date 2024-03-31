import React from 'react';
import { useParams } from "react-router-dom";
import './text.css'

const Text = props => {
    const { text, texto } = useParams();


    
    return (
      <div className="panel-default" style={{backgroundColor:texto}} >
        <div className="panel-body">
            {isNaN(+text)?  <div>La palabra es: {text}</div>:<div>El número es: {text}</div> }
        </div>
      </div>
    );
}
export default Text;
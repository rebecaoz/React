import React from 'react';
import "./style.css";
import Form from './components/Form';


export default function App() {
  return(
    <div className="App">
      <div className="App-content">
        <h1>
          Lista de Tareas
        </h1>
        <Form />
      </div>
    </div>
  )
}

import React, { useState } from  'react';
import "./style.css";
import UserForm from './components/UserForm'
//import Result from './components/Result'

export default function App() {

  const [state, setState] = useState({
    firstName:"",
    lastName:"",
    email:"",
    password:"",
    confirmPassword:"",
  })
  return (
    <div>
      <UserForm inputs={state} setInputs={setState} />
    
    </div>
  );
}

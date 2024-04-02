import React, { useState } from  'react';
import './UserForm.css';
    
    
const UserForm = (props) => {
    const [name, setName] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passError, setPassError] = useState("");
    const [confirm, setConfirm] = useState("");
    const [confirmError, setConfirmError] = useState("");

    const handleError = (e) => {
        if(e.target.name=='firstName') {
            setName(e.target.value);
            if(e.target.value.length < 1){
                setNameError("Name is required!");
            }else if(e.target.value.length < 3){
                setNameError("Name must be 3 characters or longer!");
            }
            else {
                setNameError('');
            }
        }else{
            setLastName(e.target.value);
            if(e.target.value.length < 1){
                setLastNameError("Last name is required!");
            }else if(e.target.value.length < 3){
                setLastNameError("Last name must be 3 characters or longer!");
            }
            else {
                setLastNameError('');
            }
        } 
    }

    const handleErrorEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1){
            setEmailError("Email is required!");
        }else if(e.target.value.length < 5){
            setEmailError("Email must be 5 characters or longer!");
        }else {
            setEmailError('');
        }
    }

    const handlePassError = (e) =>{
        setPassword(e.target.value);
        if(e.target.value.length < 1){
            setPassError("Password is required!");
        }else if(e.target.value.length < 8){
            setPassError("Password must be 8 characters or longer!");
        }else {
           setPassError('');
        }
    }

    const handleConfirmError = (e) =>{
        setConfirm(e.target.value);
        if(e.target.value!=password){
            setConfirmError("Passwords must match");
        }else{
            setConfirmError("");
        }
    }
    
    return(
        <form onSubmit={ (e) => e.preventDefault() }>
            <div className='block'>
                <label htmlFor='firstName'>First Name: </label> 
                <input type="text" onChange={ handleError} name='firstName'/>
                {
                    nameError ?
                    <p style={{color:'red'}}>{ nameError }</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Last Name: </label> 
                <input type="text"  name='lastName' onChange={ handleError}/>
                {
                    lastNameError ?
                    <p style={{color:'red'}}>{ lastNameError }</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Email: </label> 
                <input type="text" name='email' onChange={handleErrorEmail} />
                {
                    emailError ?
                    <p style={{color:'red'}}>{ emailError }</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Password: </label>
                <input type="password" name='password' onChange={handlePassError}/>
                {
                    passError ?
                    <p style={{color:'red'}}>{ passError }</p> :
                    ''
                }
            </div>
            <div className='block'>
                <label>Confirm Password: </label>
                <input type="password"  name='confirmPass' onChange= {handleConfirmError} />
                {
                    confirmError ?
                    <p style={{color:'red'}}>{ confirmError }</p> :
                    ''
                }
            </div>
           
        </form>
    );
};
    
export default UserForm;

import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import Text from './components/Text';


function App(props) {
  

  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Link to="/home">Home</Link>
      <Routes>
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/:text" element={ <Text />}>
          
        </Route> 
      </Routes>
    </div>
  );
}

export default App;

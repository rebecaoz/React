import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </div>
  );
}

export default App;

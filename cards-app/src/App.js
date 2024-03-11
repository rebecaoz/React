import React from 'react';
import PersonCard from './components/PersonCard/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <PersonCard firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <PersonCard firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <PersonCard firstName="Millard" lastName="Filmore" age={50} hairColor="Brown" />
      <PersonCard firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />      
    </div>
  );
}

export default App;

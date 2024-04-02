
import './App.css';
import {
  Routes,
  Route
} from "react-router-dom";
import Buscador from './components/Buscador';
import People from './components/People';

function App() {
  return (
    <div className="App">
      <Buscador />
      <Routes>
        
        <Route path="/people/:id" element={<People />} />
      </Routes>
    </div>
  );
}

export default App;

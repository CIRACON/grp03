import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Characters from './components/Characters.js'
import Films from './components/Films.js'
import Film from './components/Film.js'
import Planets from './components/Planets.js'
import Planet from './components/Planet.js'
import Character from './components/Character.js'
function App() {



  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters/>}/>
        <Route path="/films" element={<Films/>}/>
        <Route path="/film/:id" element={<Film/>}/>
        <Route path="/planets" element={<Planets/>}/>
        <Route path="/planet/:id" element={<Planet/>}/>
        <Route path="/people/:id" element={<Character/>}/>
        
        </Routes>
        </BrowserRouter>
       
    </div>
  );
}

export default App;

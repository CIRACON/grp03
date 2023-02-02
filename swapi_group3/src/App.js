import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Characters from './components/Characters.js'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Characters/>}/>
        
        </Routes></BrowserRouter>
       
    </div>
  );
}

export default App;

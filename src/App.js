import './App.css';
import React from 'react';
import Navbar from './JS/Navbar'; 
import Home from './JS/Home';
import Foooter from './JS/Foooter';
import Cadastro from './JS/cadastre';
import Sobre from './JS/Sobre';
import LoginForm from './JS/login';
import Loja from './JS/Loja';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Cadastre-se' element={<Cadastro/>}/>
            <Route path='/Sobre' element={<Sobre/>}/>
            <Route path='/Login' element={<LoginForm/>}/>
            <Route path='/Loja' element={<Loja/>}/>
          </Routes>
        <Foooter />
      </div>
    </Router>
  );
}

export default App;

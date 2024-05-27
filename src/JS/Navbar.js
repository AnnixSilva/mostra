import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as Ecolife } from '../assets/Ecolife.svg';
import { ReactComponent as User } from '../assets/user.svg';
import{ Link } from 'react-router-dom'


function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-custom-color"> 
      <div className="container-fluid">
        <a className="navbar-brand" href="#"/>
        <Link to="/"><Ecolife className='eco'/></Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="Loja">Loja</Link>       
            <Link className="nav-link" to="/Parceria">Parceria</Link>
            <Link className="nav-link" to="/Sobre">Sobre-nós</Link>
            <Link className="nav-user" to="/Login"><User/></Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

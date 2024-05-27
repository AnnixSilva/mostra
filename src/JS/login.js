import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';
import '../CSS/login.css';
import { Link } from 'react-router-dom';


function LoginForm() {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para autenticar o usuário
    console.log(formData);
  };

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div className="form-item">
        <label htmlFor="username"></label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
          placeholder='Nome de Usuário ou E-mail'
          className='input-1'
        />
      </div>
      <div className="form-item">
        <label htmlFor="password"></label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder='Senha'
        />
      </div>
      <button type="submit">Entrar</button>
      <div className="social-login">
        <button className="google-login">
          <FontAwesomeIcon icon={faGoogle} />
          Fazer login com o Google
        </button>
        <button className="facebook-login">
          <FontAwesomeIcon icon={faFacebook} />
          Fazer login com o Facebook
        </button>
      </div>
      <div className="register-link">
        <span>Não tem uma conta?</span>
        <Link to="/Cadastre-se">Cadastre-se</Link>
      </div>
    </form>
  );
}

export default LoginForm;
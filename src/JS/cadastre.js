import React, { useState } from 'react';
import '../CSS/cadastro.css';

function FormularioCadastro() {
  const [formData, setFormData] = useState({
    fullName: '',
    emailOrPhone: '',
    password: '',
    gender: '',
    dateOfBirth: ''
  });

  window.alert('Você clicou no botão!');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode adicionar lógica para enviar os dados do formulário para o backend
    console.log(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3 className='crie'>Crie sua conta</h3>
      <label className='form-item-cad'>
        <input
          className='form-input'
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder='Nome Completo'
        />
      </label>
      <label className='form-item-cad'>
        <input
          className='form-input'
          type="text"
          name="emailOrPhone"
          value={formData.emailOrPhone}
          onChange={handleChange}
          required
          placeholder='E-mail ou Telefone'
        />
      </label >
      <label className='form-item-cad'>
        
        <input
          className='form-input'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          placeholder='Senha'
        />
      </label>
      <label className='form-item-cad'>
        <p className='leandro'>Data de Nascimento:</p>
        <input
          className='form-input-date'
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <label className='form-item-cad'>
  <p className='textGEN'> Gênero: </p>
  <select
    className='form-select'
    name="gender"
    value={formData.gender}
    onChange={handleChange}
    required
  >
    <option value="F">Feminino</option>
    <option value="M">Masculino</option>
    <option value="O">Outros</option>
  </select>
</label>

      <button className='form-button' type="submit">Cadastrar</button>
        </form>
  );
}

export default FormularioCadastro;

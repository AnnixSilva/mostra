import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginForm from '../JS/login.js';

describe('LoginForm component', () => {
  test('renders without crashing', () => {
    const { getByText, getByPlaceholderText } = render(
      <Router>
        <LoginForm />
      </Router>
    );
    
    expect(getByText('Login')).toBeInTheDocument();
    expect(getByPlaceholderText('Nome de Usuário ou E-mail')).toBeInTheDocument();
    expect(getByPlaceholderText('Senha')).toBeInTheDocument();
    expect(getByText('Entrar')).toBeInTheDocument();
    expect(getByText('Fazer login com o Google')).toBeInTheDocument();
    expect(getByText('Fazer login com o Facebook')).toBeInTheDocument();
    expect(getByText('Não tem uma conta?')).toBeInTheDocument();
    expect(getByText('Cadastre-se')).toBeInTheDocument();
  });

  test('updates input fields when typing', () => {
    const { getByPlaceholderText } = render(
      <Router>
        <LoginForm />
      </Router>
    );

    fireEvent.change(getByPlaceholderText('Nome de Usuário ou E-mail'), { target: { value: 'testuser' } });
    fireEvent.change(getByPlaceholderText('Senha'), { target: { value: 'testpassword' } });

   expect(getByPlaceholderText('Nome de Usuário ou E-mail').value).toBe('testuser');
    expect(getByPlaceholderText('Senha').value).toBe('testpassword');
  });

  test('navigates to register page when link is clicked', () => {
    const { getByText } = render(
      <Router>
        <LoginForm />
      </Router>
    );

    fireEvent.click(getByText('Cadastre-se'));

   expect(window.location.href).toContain('/Cadastre-se');
  });
});

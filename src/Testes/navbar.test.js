import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../JS/Navbar';

describe('Navbar', () => {
  test('renders Navbar component with links', () => {
    render(
      <Router>
        <Navbar />
      </Router>
    );

    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('Loja')).toBeInTheDocument();
    expect(screen.getByText('Serviços')).toBeInTheDocument();
    expect(screen.getByText('Parceria')).toBeInTheDocument();
    expect(screen.getByText('Sobre-nós')).toBeInTheDocument();
  });
});

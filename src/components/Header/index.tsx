import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import Logo from '../../assets/logo.png';


export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo do Banco" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/atendimento">Atendimento</Link>
        </li>
        <li>
          <Link to="/gerencial">Gerencial</Link>
        </li>
      </ul>
    </Container>
  );
};

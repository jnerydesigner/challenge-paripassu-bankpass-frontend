import React from 'react';

import { Container } from './styles';
import Logo from '../../assets/logo.png';


export function Header() {
  return (
    <Container>
      <img src={Logo} alt="Logo do Banco" />
    </Container>
  );
};

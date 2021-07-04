import React from 'react';

import { Container } from './styles';

interface ListaProps {
  typeLista: string;
  pass: string;
}


export function ItemLista({ typeLista, pass }: ListaProps) {
  return (
    <Container typeLista={typeLista}>
      <span className="h1-lista">{pass}</span>
    </Container>
  );
};

import React from 'react';

import { Container } from './styles';

interface PassBankProps {
  titleButton: string;
  typeButton: string;
}

export function PassBank({ titleButton, typeButton }: PassBankProps) {
  return (
    <Container typeButton={typeButton} >
      <h1>{titleButton}</h1>
    </Container>
  );
};
import React from 'react';

import { Container } from './styles';

interface PassBankProps {
  titleButton: string;
  typeButton: string;
  onSubmitTicket: () => void;

}

export function PassBankButton({ titleButton, typeButton, onSubmitTicket }: PassBankProps) {
  return (
    <Container typeButton={typeButton} onClick={onSubmitTicket} >
      <h1>{titleButton}</h1>
    </Container>
  );
};
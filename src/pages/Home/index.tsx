import React, { useState } from 'react';
import { Header } from '../../components/Header';
import { PassBank } from '../../components/PassBank';
import { PassBankButton } from '../../components/PassBankButton';
import { api } from '../../services/api';

import {
  Container,
  Content,
  PassBankContainer,
} from './styles';



export function Home() {
  const [ticket, setTicket] = useState('');

  async function handleSubmitTicket(type: string) {
    const ticket = await api.get(`users/${type}`).then(response => response.data);
    setTicket(ticket);
  }

  return (
    <Container>
      <Header />
      <Content>
        <h1>Clique em uma das opções
          abaixo para gerar sua senha.</h1>
        <PassBankContainer>
          <PassBankButton titleButton="Preferêncial" typeButton="P" onSubmitTicket={() => handleSubmitTicket("P")} />
          <PassBankButton titleButton="Normal" typeButton="N" onSubmitTicket={() => handleSubmitTicket("N")} />
        </PassBankContainer>
        <h1>Sua senha Gerada é:</h1>
        <PassBank titleButton={ticket} typeButton="SN" />
      </Content>
    </Container>
  );
};
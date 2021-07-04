import React, { useState } from 'react';
import {
  Grid,
  Heading
} from '@chakra-ui/react';
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { PassBank } from '../../components/PassBank';
import { PassBankButton } from '../../components/PassBankButton';
import api from '../../services/api';




export function Home() {
  const [ticket, setTicket] = useState('');

  async function handleSubmitTicket(type: string) {
    const ticket = await api.get(`users/${type}`).then(response => response.data);
    setTicket(ticket);
  }

  return (
    <>

      <HeaderGerencial />


      <Grid
        backgroundColor="gray.100"
        w={1000}
        maxWidth={1480}
        height="500px"
        align="center"
        templateRows="50px 1fr 1fr"
        borderRadius="5"
      >
        <Heading color="gray.500" mt="3" p="0" mx="auto" >Clique em uma das opções
          abaixo para gerar sua senha.</Heading>
        <Grid templateColumns="repeat(2, 1fr)" justifyContent="center" alignItems="center">
          <PassBankButton titleButton="Preferêncial" typeButton="P" onSubmitTicket={() => handleSubmitTicket("P")} />
          <PassBankButton titleButton="Normal" typeButton="N" onSubmitTicket={() => handleSubmitTicket("N")} />
        </Grid>
        <Grid templateColumns="repeat(2, 1fr)" justifyContent="center" alignItems="center">
          <Heading color="gray.500" p="0" mx="auto">Sua senha Gerada é:</Heading>
          <PassBank titleButton={ticket} typeButton="SN" />
        </Grid>


      </Grid>
    </>
  );
};
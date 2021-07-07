import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTicket } from '../../features/tickets';
import {
  Grid,
  Heading
} from '@chakra-ui/react';
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { PassBankChakra } from '../../components/PassBankChakra';
import { PassBankButton } from '../../components/PassBankButton';
import api from '../../services/api';
import { selectTicket } from '../../features/tickets/store';

interface Tickets {
  id: number;
  number: string;
  type: string;
  status: string;
}


export function Home() {
  const [ticket, setTicket] = useState<Tickets>();
  const ticketsSel = useSelector(selectTicket);

  const dispatch = useDispatch();
  console.log(ticketsSel);

  async function handleSubmitTicket(type: string) {
    const data = {
      type: type,
      status: 'SA'
    }
    const ticketResponse = await api.post('api/tickets', data).then(response => response.data);

    setTicket(ticketResponse);

  }

  const addTicket = useCallback(() => {
    // const ticke = {
    //   id: 1,
    //   number: "P2345",
    //   type: "P",
    //   status: "sema"
    // };
    dispatch(addTicket());
  }, [dispatch])

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
          <PassBankChakra titleButton={ticket?.number} typeButton="P" />
        </Grid>


      </Grid>
    </>
  );
};
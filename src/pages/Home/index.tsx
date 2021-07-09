import React, { useCallback, useEffect } from 'react';
import {
  Grid,
  Heading,
} from '@chakra-ui/react';
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { PassBankChakra } from '../../components/PassBankChakra';
import { PassBankButton } from '../../components/PassBankButton';
import { useDispatch, useSelector } from "react-redux";
import { getTicket, postTicket } from '../../redux/actions';
import { Store } from '../../redux/types';




export function Home() {
  const tickets = useSelector((state: Store) => state.tickets);
  // console.log(tickets)



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicket());
  }, [dispatch, tickets]);



  const handleSubmitTicket = useCallback(async (type: string) => {
    const data = {
      type: type,
      status: 'SA',
      is_attending: false,
    }

    dispatch(postTicket(data));


  }, [dispatch]);

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
          <PassBankChakra titleButton={tickets[0]?.number} typeButton="P" />
        </Grid>
      </Grid>
    </>
  );
};
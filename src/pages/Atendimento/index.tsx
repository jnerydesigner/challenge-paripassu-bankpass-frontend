import React, { useEffect } from 'react';
import {
  Grid,
  Box,
  Heading,
  List
} from '@chakra-ui/react'
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { ItemLista } from '../../components/ItemLista';
import { PassBankChakra } from '../../components/PassBankChakra';
import { Store } from '../../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { getTicketsTypeAtending } from '../../redux/actions';






export function Atendimento() {

  const tickets = useSelector((state: Store) => state.tickets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTicketsTypeAtending());
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
        justifyContent="space-between"
        templateColumns="repeat(2, 1fr)"
        gap={3}
        px={3}
        py={3}
        borderRadius="5"
      >
        <Box
          w="100%"
          h="100%"
          bg="gray.50"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          p="2"
        >
          <Heading>Senha Chamando</Heading>
          <PassBankChakra titleButton={tickets[0]?.number} typeButton={String(tickets[0]?.type)} />
          {tickets[0].type === "P" ?
            <Heading>PRIORIDADE</Heading> :
            <Heading>NORMAL</Heading>}
        </Box>
        <Box
          w="100%"
          h="100%"
          bg="gray.50"
          p="2"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
        >
          <Heading>Próximas Senhas</Heading>

          <List
            w="100%"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {tickets.map(itemLista => (
              <ItemLista key={itemLista.id} pass={itemLista.number} typeLista={itemLista.type} />
            ))}
          </List>

        </Box>
      </Grid>
    </>
  );
};
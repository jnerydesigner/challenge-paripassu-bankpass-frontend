import React, { useContext } from 'react';
import {
  Grid,
  Box,
  Heading,
  List
} from '@chakra-ui/react'
import { useFetchTicketsQuery } from '../../features/tickets/tickets-api-slice';
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { ItemLista } from '../../components/ItemLista';
import { PassBank } from '../../components/PassBank';
import { UserContext } from '../../App';




export function Atendimento() {
  const context = useContext(UserContext);
  const { data = [] } = useFetchTicketsQuery(context);



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
          <Heading>Senha Chamando {context}</Heading>
          <PassBank titleButton="P2345" typeButton="P" />

        </Box>
        <Box
          w="100%"
          h="100%"
          bg="gray.50"
          p="2"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >

          <List
            w="100%"
            h="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            {data.map(itemLista => (
              <ItemLista key={itemLista.id} pass={itemLista.ticket} typeLista={itemLista.type} />
            ))}
          </List>

        </Box>
      </Grid>
    </>
  );
};
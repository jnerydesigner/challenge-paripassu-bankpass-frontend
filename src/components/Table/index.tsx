import React, { useContext } from 'react';
import { useFetchTicketsQuery } from '../../features/tickets/tickets-api-slice'
import { PhoneIcon, RepeatIcon } from '@chakra-ui/icons'
import {
  Grid,
  Box,
  Heading,
  Table as TableTickets,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Stack,
  Button,
  Divider
} from '@chakra-ui/react';

import { PassBank } from '../PassBank';
import { Pagination } from '../Pagination';
import { UserContext } from '../../App';


export function Table() {
  const context = useContext(UserContext);
  const { data = [] } = useFetchTicketsQuery(context);


  const handleNextPass = () => {
    alert("Chamar Próxima Senha")
  }

  function handleTicketReload(id: number) {
    alert("Chamar de novo a Senha " + id);
  }


  return (
    <Grid
      backgroundColor="gray.100"
      w={1000}
      maxWidth={1480}
      height="500px"
      align="center"
      justifyContent="space-between"
      templateColumns="repeat(2, 1fr)"
      gap={2}
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
        <Heading>Senha Chamada</Heading>
        <PassBank titleButton="P2345" typeButton="P" />
        <Stack mx="auto" direction="row" mt="10" spacing={4} height="10%">
          <Button onClick={handleNextPass} leftIcon={<PhoneIcon />} colorScheme="pink" variant="solid">
            Chamar Próxima senha
          </Button>
        </Stack>
      </Box>
      <Box
        w="100%"
        h="100%"
        bg="gray.50"
        p="2"
        display="grid"
        gridTemplateRows="1fr 50px"
      >


        <TableTickets colorScheme="whiteAlpha" variant="striped">
          <Thead>
            <Tr>
              <Th>
                Número da Senha
              </Th>
              <Th>
                Ordem da Senha
              </Th>
              <Th>
                Chamar Senha
              </Th>
            </Tr>
          </Thead>

          <Tbody>
            {data.map(itemList => (
              <Tr key={itemList.id}>
                <Td>
                  {itemList.ticket + ' ' + itemList.id}
                </Td>
                <Td>
                  NÃO CHAMADO
                </Td>
                <Td>
                  <Button onClick={() => handleTicketReload(itemList.id)} leftIcon={<RepeatIcon />} colorScheme="pink">
                    Chamar
                  </Button>
                </Td>
              </Tr>
            ))}

          </Tbody>
        </TableTickets>
        <Divider my="1" borderColor="gray.700" />

        <Pagination />
      </Box>
    </Grid>
  );
}
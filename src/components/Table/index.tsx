import React from 'react';
import { Ticket } from '../../features/tickets/tickets-api-slice'
import { RepeatIcon } from '@chakra-ui/icons'
import {
  Box,
  Table as TableTickets,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Button,
  Divider
} from '@chakra-ui/react';

import { Pagination } from '../Pagination';

interface TableProps {
  tickets: Ticket[];
  changePage: () => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export function Table({ tickets, changePage, handleNextPage, handlePrevPage }: TableProps) {


  // function handleTicketReload(id: number) {
  //   alert("Chamar de novo a Senha " + id);

  // }


  return (


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
              Número da Senhas
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
          {tickets.map(itemList => (
            <Tr key={itemList.id}>
              <Td>
                {itemList.number}
              </Td>
              <Td>
                NÃO CHAMADO
              </Td>
              <Td>
                <Button onClick={changePage} leftIcon={<RepeatIcon />} colorScheme="pink">
                  Chamar
                </Button>
              </Td>
            </Tr>
          ))}

        </Tbody>
      </TableTickets>
      <Divider my="1" borderColor="gray.700" />
      <Pagination handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </Box>
  );
}
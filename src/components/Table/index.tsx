import React, { useCallback, useState, useEffect } from 'react';
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
  Divider,
  Heading
} from '@chakra-ui/react';

import { Pagination } from '../Pagination';
import { useSelector, useDispatch } from 'react-redux';
import { Store } from '../../redux/types';
import { getTicketsTypeAtending } from '../../redux/actions';


export function Table() {
  const [page, setPage] = useState(1);

  const tickets = useSelector((state: Store) => state.tickets);
  const pageTotal = useSelector((state: Store) => state.pageTotal);


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getTicketsTypeAtending(page));
  }, [dispatch, page]);



  const handleNextPage = useCallback(() => {
    if (page >= pageTotal) {
      setPage(pageTotal);
    }
    setPage(page + 1);
  }, [page, pageTotal]);

  const handlePrevPage = useCallback(() => {
    if (page <= 0) {
      setPage(1);
    } else {
      setPage(page - 1)
    }

  }, [page]);




  const changePage = useCallback((id: number) => {
    alert(id);
  }, []);

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
            <Th textAlign="center">
              Número da Senhas
            </Th>
            <Th textAlign="center">
              Tipo da Senha
            </Th>

            <Th textAlign="center">
              Status da Senha
            </Th>

            <Th textAlign="center">
              Chamar Senha
            </Th>
          </Tr>
        </Thead>

        <Tbody>
          {tickets.map(itemList => (
            <Tr key={itemList.id}>
              <Td textAlign="center">
                {itemList.number}
              </Td>
              <Td textAlign="center">
                <Heading fontSize="14px">{itemList.type === 'P' ? "PRIORIDADE" : "NORMAL"}</Heading>
              </Td>
              <Td textAlign="center">
                <Heading fontSize="14px">NÃO CHAMADO</Heading>
              </Td>
              <Td textAlign="center">
                <Button p="0" onClick={() => changePage(itemList.id)} leftIcon={<RepeatIcon />} colorScheme="pink" />
              </Td>
            </Tr>
          ))}

        </Tbody>
      </TableTickets>
      <Divider my="1" borderColor="gray.700" />
      <Pagination handlePrevPage={handlePrevPage} handleNextPage={handleNextPage} />
    </Box>
  );
}
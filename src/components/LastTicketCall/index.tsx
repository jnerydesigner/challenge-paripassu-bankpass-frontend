import React, { useState, useEffect } from 'react';
import {
  Box,
  Heading,
  Stack,
  Button
} from '@chakra-ui/react';
import { PassBankGerencial } from '../PassBankGerencial';
import { ArrowRightIcon, CheckIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux';
import { Store } from '../../redux/types';
import { getTicketsTypeAtending, updateTicketAtending } from '../../redux/actions';




export function LastTicketCall() {
  const [attendence, setAttendence] = useState(false);


  const tickets = useSelector((state: Store) => state.tickets);

  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getTicketsTypeAtending());
  }, [dispatch, attendence]);



  const handleConfirmAttendence = (id: number) => {
    dispatch(updateTicketAtending(id))
    setAttendence(attendence === true ? false : true);
  }
  return (
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
      <Box
        w='100%'
        mt="-10"
        mb="20px"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* <Box
          mx="auto"
          height="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h3" size="sm">
            Senha Anterior
          </Heading>
          <Heading>p122121</Heading>
        </Box> */}
        <Box
          mx="auto"
          height="80px"
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
        >
          <Heading as="h3" size="sm">
            Próxima Senha
          </Heading>
          <Heading>{tickets[1]?.number}</Heading>
        </Box>

      </Box>
      {attendence === true ? <Heading color="red">Senha em Atendimento</Heading> : <Heading color="green">Senha Chamada</Heading>}
      {attendence === true ? (
        <PassBankGerencial titleButton={tickets[0]?.number} typeButton={tickets[0]?.type} inAttendance={attendence} />
      ) : (
        <PassBankGerencial titleButton={tickets[0]?.number} typeButton={tickets[0]?.type} inAttendance={attendence} />
      )}
      <Stack mx="auto" direction="row" mt="10" spacing={4} height="10%">
        {
          attendence === false ? (
            <Button onClick={() => handleConfirmAttendence(tickets[0]?.id)} leftIcon={<CheckIcon />} colorScheme="green" variant="solid">
              Atender
            </Button>
          ) : (
            <Button onClick={() => handleConfirmAttendence(tickets[0]?.id)} leftIcon={<ArrowRightIcon />} colorScheme="red" variant="solid">
              Chamar próxima senha
            </Button>
          )
        }
      </Stack>
    </Box>
  );
}

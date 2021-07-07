import React, { useState } from 'react';
import {
  Box,
  Heading,
  Stack,
  Button
} from '@chakra-ui/react';
import { PassBankChakra } from '../PassBankChakra';
import { PhoneIcon, CheckIcon, CloseIcon } from '@chakra-ui/icons'


export function LastTicketCall() {
  const [attendence, setAttendence] = useState(false);

  const handleNextPass = () => {
    alert("Chamar Próxima Senha")
  }

  const handleConfirmAttendence = () => {
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
      {attendence === true ? <Heading color="green">Senha em Atendimento</Heading> : <Heading>Senha Chamada</Heading>}
      {attendence === true ? (
        <PassBankChakra titleButton="P2345" typeButton="P" inAttendance={false} />
      ) : (
        <PassBankChakra titleButton="P2345" typeButton="P" inAttendance={true} />
      )}
      <Stack mx="auto" direction="row" mt="10" spacing={4} height="10%">
        {
          attendence === false ? (
            <Button onClick={handleConfirmAttendence} leftIcon={<CheckIcon />} colorScheme="green" variant="solid">
              Atender
            </Button>
          ) : (
            <Button onClick={handleConfirmAttendence} leftIcon={<CloseIcon />} colorScheme="red" variant="solid">
              Liberar
            </Button>
          )
        }

        <Button onClick={handleNextPass} leftIcon={<PhoneIcon />} colorScheme="pink" variant="solid">
          Chamar senha
        </Button>
      </Stack>
    </Box>
  );
}

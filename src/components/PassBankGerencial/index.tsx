import React from 'react';
import {
  Box,
  Heading
} from '@chakra-ui/react';


interface PassBankProps {
  titleButton?: string;
  typeButton: string;
  inAttendance?: boolean;
}


export function PassBankGerencial({ titleButton, typeButton, inAttendance }: PassBankProps) {

  return (
    <>

      {(inAttendance === true) ?
        (
          <Box
            width="350px"
            height="180px"
            bgColor="red"
            borderRadius="5px"
            margin="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
          >
            <Heading size="4xl" color="gray.50">{titleButton}</Heading>
          </Box>
        )
        :
        (
          <Box
            width="350px"
            height="180px"
            bgColor="green"
            borderRadius="5px"
            margin="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
          >
            <Heading size="4xl" color="gray.50">{titleButton}</Heading>
          </Box>
        )
      }
    </>
  );
};
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


export function PassBankChakra({ titleButton, typeButton, inAttendance = false }: PassBankProps) {
  return (
    <>
      {(typeButton === "N") ?
        (
          <Box
            width="350px"
            height="180px"
            bgColor="blue_baby"
            borderRadius="5px"
            margin="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
          >
            <Heading color="gray.50">{titleButton}</Heading>
          </Box>
        )
        :
        (
          <Box
            width="350px"
            height="180px"
            bgColor="pink_baby"
            borderRadius="5px"
            margin="10px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            mx="auto"
          >
            <Heading color="gray.50">{titleButton}</Heading>
          </Box>
        )
      }
    </>
  );
};
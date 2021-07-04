import React from 'react';
import {
  Stack,
  Button
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';



export function Pagination() {

  const handlePageNext = () => {
    alert("Clicou no Next")
  }

  const handlePagePrev = () => {
    alert("Clicou no Prev")
  }


  return (
    <>
      <Stack
        direction="row"
        mt="1"
        spacing="10"
        justify="center"
        align="center"
      >
        <Button
          onClick={handlePagePrev}
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          _hover={{
            bg: "gray.500"
          }}
        >
          <ArrowLeftIcon />
        </Button>

        <Button
          size="sm"
          fontSize="xs"
          width="4"
          colorScheme="pink"
          _hover={{
            bg: "gray.500"
          }}
          onClick={handlePageNext}
        >
          <ArrowRightIcon />
        </Button>

      </Stack>
    </>
  );
}
import React from 'react';
import {
  Stack,
  Button
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';




export function Pagination() {


  const handlePageNext = (id: number) => {
    alert("Clicou no Next " + id)
  }

  const handlePagePrev = (id: number) => {
    // handleNextPage()
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
          onClick={() => handlePagePrev(2)}
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
          onClick={() => handlePageNext(2)}
        >
          <ArrowRightIcon />
        </Button>

      </Stack>
    </>
  );
}
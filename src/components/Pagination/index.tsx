import React from 'react';
import {
  Stack,
  Button
} from '@chakra-ui/react';
import { ArrowLeftIcon, ArrowRightIcon } from '@chakra-ui/icons';


interface PaginationProps {
  handlePrevPage: () => void;
  handleNextPage: () => void;
}

export function Pagination({ handleNextPage, handlePrevPage }: PaginationProps) {
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
          onClick={handlePrevPage}
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
          onClick={handleNextPage}
        >
          <ArrowRightIcon />
        </Button>

      </Stack>
    </>
  );
}
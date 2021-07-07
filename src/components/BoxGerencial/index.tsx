import React from 'react';
import {
  Grid,
} from '@chakra-ui/react';
import { LastTicketCall } from '../LastTicketCall';
import { Table } from '../Table';
import { Ticket } from '../../features/tickets/tickets-api-slice';

interface TableProps {
  tickets: Ticket[];
  changePage: () => void;
  handleNextPage: () => void;
  handlePrevPage: () => void;
}

export function BoxGerencial({ tickets, changePage, handleNextPage, handlePrevPage }: TableProps) {
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
      <LastTicketCall />
      <Table tickets={tickets} changePage={changePage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />

    </Grid>
  );
}
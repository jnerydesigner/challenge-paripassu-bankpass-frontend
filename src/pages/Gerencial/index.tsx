import React, { useState, useCallback } from 'react';
import { BoxGerencial } from '../../components/BoxGerencial';
import { HeaderGerencial } from '../../components/HeaderGerencial';
import { useFetchTicketsPaginationQuery } from '../../features/tickets/tickets-api-slice';



export function Gerencial() {
  const [page, setPage] = useState(1);

  // const { data: tickets = [] } = useFetchTicketsLimitGerencialQuery(page);
  const { data: tickets = [] } = useFetchTicketsPaginationQuery(page);

  const changePage = useCallback(() => {
    alert(page)
  }, [page]);

  const handleNextPage = useCallback(() => {
    setPage(page + 1);
  }, [page]);

  const handlePrevPage = useCallback(() => {
    setPage(page - 1);
  }, [page]);

  // const handlePrevPage = useCallback((page: number) => {
  //   setPage(page);
  // }, []);


  return (
    <>
      <HeaderGerencial />
      <BoxGerencial tickets={tickets} changePage={changePage} handleNextPage={handleNextPage} handlePrevPage={handlePrevPage} />
    </>
  );
}

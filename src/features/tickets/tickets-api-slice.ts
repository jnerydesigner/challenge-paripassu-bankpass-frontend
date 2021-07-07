import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export interface Ticket {
  id: number;
  number: string;
  type: string;
  status: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints(builder) {
    return {
      fetchTickets: builder.query<Ticket[], number | void>({
        query() {
          return `/tickets`;
        }
      }),
      fetchTicketsLimit: builder.query<Ticket[], number | void>({
        query(limit = 4) {
          return `/tickets/status/limit?limit=${limit}`;
        }
      }),
      fetchTicketsLimitGerencial: builder.query<Ticket[], number | void>({
        query(limit = 4) {
          return `/tickets/gerencial/limit?limit=${limit}`;
        }
      }),
      fetchTicketsLimitUm: builder.query<Ticket[], number | void>({
        query() {
          return `/tickets/status/limitum`;
        }
      }),
      fetchTicketsPagination: builder.query<Ticket[], number | void>({
        query(page = 1) {
          return `/tickets/pagination/${page}`;
        }
      })
    }
  }
});

export const {
  useFetchTicketsQuery,
  useFetchTicketsLimitQuery,
  useFetchTicketsLimitUmQuery,
  useFetchTicketsLimitGerencialQuery,
  useFetchTicketsPaginationQuery
} = apiSlice;
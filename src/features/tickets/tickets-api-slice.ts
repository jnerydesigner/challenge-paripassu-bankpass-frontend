import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import api from '../../services/api';
import { AppDispatch, AppThunk } from '../../store/store';


export interface Ticket {
  id: number;
  number: string;
  type: string;
  status: string;
}




export function asyncTickets(): AppThunk {
  return async function (dispatch: AppDispatch) {
    const response = await api.get('api/tickets');

    console.log(response);
    return response;
  }
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
      }),

      fetchTicketTrue: builder.query<Ticket[], string | void>({
        query() {
          return `/tickets/attending`;
        }
      }),

      fetchUpdateTicketStatus: builder.mutation({
        query: ({ id, ...patch }) => ({ url: `post/${id}`, method: 'PATCH', body: patch }),
        //transformResponse: (response) => response.data,
      })
    }
  }
});

export const {
  useFetchTicketsQuery,
  useFetchTicketsLimitQuery,
  useFetchTicketsLimitUmQuery,
  useFetchTicketsLimitGerencialQuery,
  useFetchTicketsPaginationQuery,
  useFetchTicketTrueQuery,
} = apiSlice;
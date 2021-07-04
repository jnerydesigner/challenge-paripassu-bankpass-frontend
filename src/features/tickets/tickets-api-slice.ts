import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


interface Tickets {
  id: number;
  ticket: string;
  type: string;
}

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3004",

  }),
  endpoints(builder) {
    return {
      fetchTickets: builder.query<Tickets[], number | void>({
        query(limit = 5, page = 3) {
          return `/tickets?_page=${page}&_sort=id&_limit=${limit}&_order=asc`;
        }
      })
    }
  }
});

export const { useFetchTicketsQuery } = apiSlice;
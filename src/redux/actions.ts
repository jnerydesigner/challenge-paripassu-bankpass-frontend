import { ThunkAction } from "redux-thunk";
import { Action } from "redux";

import { Ticket, Store, TicketData, TicketNumber } from "../redux/types";
import api from "../services/api";


export const ADD_TICKETS = "ADD_TICKETS";
export const SET_TICKETS = "SET_TICKETS";
export const SET_TICKETS_TYPE = "SET_TICKETS_TYPE";
export const SET_TICKETS_UNIT = "SET_TICKETS_UNIT";
export const SET_NEW_TICKET = "SET_NEW_TICKET";
export const SET_TICKET = "SET_TICKET";
export const GET_PAGES_TOTAL = "GET_PAGES_TOTAL";
export const GET_TICKETS_TYPE = "GET_TICKETS_TYPE";

export type ActionTypes =
  | { type: typeof SET_TICKETS; payload: Ticket[] }
  | { type: typeof SET_TICKETS_TYPE; payload: Ticket[] }
  | { type: typeof SET_TICKET; payload: TicketData }
  | { type: typeof SET_TICKETS_UNIT; payload: Store }
  | { type: typeof ADD_TICKETS }
  | { type: typeof SET_NEW_TICKET; payload: TicketNumber }

export const addTicket = (): ActionTypes => ({ type: ADD_TICKETS });
export const setTicket = (tickets: Ticket[], page = null): ActionTypes => ({
  type: SET_TICKETS,
  payload: tickets,
});

export const setTicketData = (ticket: TicketData): ActionTypes => ({
  type: SET_TICKET,
  payload: ticket,
});

export const setTicketDataType = (tickets: Ticket[]): ActionTypes => ({
  type: SET_TICKETS_TYPE,
  payload: tickets,
});

export const setNewTicket = (text: TicketNumber): ActionTypes => ({
  type: SET_NEW_TICKET,
  payload: text,
});




export const getTicket = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const resp = await api.get(`api/tickets/status/limit?limit=1`);
  const tickets: Ticket[] = resp.data;
  dispatch(setTicket(tickets));
};

export const getTicketSeis = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const resp = await api.get(`api/tickets/status/limit?limit=6`);
  const tickets: Ticket[] = resp.data;
  dispatch(setTicket(tickets));
};

export const getUmTicket = (): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const resp = await api.get(`api/tickets/status/limitum`);
  const tickets: Ticket[] = resp.data;
  dispatch(setTicket(tickets));
};

export const getTicketGerencial = (page = 1): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const response = await api.get('api/tickets/count');
  const resp = await api.get(`api/tickets/pagination/${page}`);
  const tickets: Ticket[] = resp.data;
  const resposta = {
    tickets: [...tickets],
    pageTotal: response.data
  }



  dispatch(setTicket(resposta.tickets, resposta.pageTotal));
};


export const postTicket = (data: TicketData): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const ticket = await api.post(`api/tickets`, data).then(response => response.data);

  dispatch(setNewTicket(ticket));
};




export const updateTicketAtending = (id: number): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const { data } = await api.put(`api/tickets/attending/${id}`).then(response => response.data);


  return data;
};

export const getTicketNotAtending = (page = 1): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const { data } = await api.get(`api/tickets/not_answered?page=${page}`);
  const { data: numPages } = await api.get('api/tickets/count');
  const tickets: Ticket[] = data;
  const resposta = {
    tickets: [...tickets],
    pageTotal: numPages
  }

  dispatch(setTicket(resposta.tickets, resposta.pageTotal));
};

export const getTicketsTypeAtending = (page = 1): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const { data } = await api.get(`api/tickets/atendimento/${page}`);
  const tickets: Ticket[] = data;
  const resposta = {
    tickets: [...tickets],
  }

  dispatch(setTicket(resposta.tickets));
};


export const getTicketFindType = (type: string): ThunkAction<void, Store, unknown, Action<string>> => async (dispatch) => {
  const resp = await api.get(`api/tickets/find_type?type=${type}`).then(response => response.data);
  const tickets: Ticket[] = resp;
  const novosTickets = [...tickets];

  dispatch(setTicketDataType(novosTickets));
};
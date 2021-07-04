import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Header } from '../../components/Header';
import { ItemLista } from '../../components/ItemLista';
import { PassBank } from '../../components/PassBank';
// import { api } from '../../services/api';

import {
  Container,
  Content,
  DisplayTela01,
  DisplayTela02,
  ListaSenha,
} from './styles';


interface ListaProps {
  id: number;
  ticket: string;
  type: string;
}


export function Atendimento() {
  const [lista, setLista] = useState<ListaProps[]>([]);

  useEffect(() => {
    async function fetchLista() {
      const listPromise = await axios.get("http://localhost:3004/tickets?_limit=5");
      const { data } = listPromise;

      setLista(data);
    }

    fetchLista();

  }, []);


  return (
    <>

      <Container>
        <Header />
        <Content>
          <DisplayTela01>
            <h2>Senha Atual</h2>
            <PassBank titleButton="1234" typeButton="P" />
          </DisplayTela01>
          <DisplayTela02 >
            <h2>Lista de Senhas Já Chamadas</h2>
            <ListaSenha>
              {lista.map(itemLista => (
                <ItemLista key={itemLista.id} pass={itemLista.ticket} typeLista={itemLista.type} />
              ))}
            </ListaSenha>
          </DisplayTela02>
        </Content>



      </Container>

    </>
  );
};
import styled from 'styled-components';

export const Container = styled.div`
  width: 1100px;
  height: 100%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  
`;

export const Content = styled.div`
  display: grid;
  height: 500px;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  background-color:#fff;
  border-radius: 5px;
`;
export const DisplayTela01 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h2{
    font-size: 26px;
  }
`;
export const DisplayTela02 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2{
    margin-bottom: 10px;
  }
`;

export const ListaSenha = styled.ul`
  list-style: none;
`;

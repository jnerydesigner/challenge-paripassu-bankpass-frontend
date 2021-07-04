import styled, { css } from 'styled-components';
interface TypeLista {
  typeLista: string;
}


export const Container = styled.li<TypeLista>`
    width: 300px;
    height: 60px;


    display: flex;
    justify-content: center;
    align-items: center;

    margin-bottom: 8px;


    span{
      color: #fff !important;
      font-size: 32px;
    }

    ${({ typeLista }) => typeLista === 'P' ? css`
      background-color: #DA85A4;
    `: typeLista === 'N' ? css`
      background-color: #85A7DA;
    `: css`
      background-color: #BEDCA0;
    `}

    :last-child{
      margin-bottom: 0;
    }
`;

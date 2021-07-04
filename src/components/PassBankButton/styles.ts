import styled, { css } from 'styled-components';

interface PassProps {
  typeButton: string;
}

export const Container = styled.button<PassProps>`
  width: 350px;
  height: 180px;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 0;
  border-radius: 8px;
  margin: 0 auto;

  ${({ typeButton }) => typeButton === 'P' ? css`
    background-color: #DA85A4;
  `: typeButton === 'N' ? css`
    background-color: #85A7DA;
  `: css`
    background-color: #BEDCA0;
  `}


  h1{
    color: #ffffff;
    ${({ typeButton }) => typeButton === 'P' ? css`
    font-size: 40px;
  `: typeButton === 'N' ? css`
    font-size: 40px;
  `: css`
    font-size: 60px;
  `}
  }
`;

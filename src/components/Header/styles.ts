import styled from 'styled-components';

export const Container = styled.div`
  height: 70px;
  width: 100%auto;
  background-color: #BEDCA0;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  margin-bottom: 10px;
  ul{
    list-style: none;
    margin-left: 30px;
    display: flex;
    flex-direction: row;
    li{
      a{
        text-decoration: none;
        padding: 10px 20px;
        &:hover{
          background-color: #fab1a0;
        }
      }
    }
  }

  image{
    width: 80px;
  }
`;

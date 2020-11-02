import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  justify-items: center;
  grid-row-gap: 10px;
  padding: 30px 50px;
`;

export const Button = styled.button`
  background-color: #3f51b5;
  color: #fff;
  border: solid 1px;
  border-radius: 5px;
  padding: 10px;
  width: 300px;
`

export const CitiesContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15px;
  grid-row-gap: 10px;
  width: 100%;

  @media(max-width: 400px) {
    grid-template-columns: 1fr;
  }
`
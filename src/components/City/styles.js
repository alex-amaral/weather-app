import styled from 'styled-components';

export const Container = styled.div`
  border: solid 1px #e6e6e6;
  border-radius: 20px;
  padding: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.8);

  main {
    display: flex;
    justify-content: space-between;
  }
`;

export const MoreInfo = styled.div`
  display: flex;
  justify-content: space-between;

  div:last-child {
    text-align: end;
  }
`

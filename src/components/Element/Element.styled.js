import styled from 'styled-components';

const Button = styled.button`
  display: block;
  width: 100px;
  height: 20px;
  border: 1.5px solid orange;
  border-radius: 5px;
  background-color: grey;
  justify-content: center;
  margin: 0 auto;
`;

const Conteiner = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  margin: 0 auto;
  align-items: center;
`;

export { Button, Conteiner };

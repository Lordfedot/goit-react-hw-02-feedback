import styled from 'styled-components';

export const ButtonBox = styled.div`
  display: flex;
  gap: 15px;
`;

export const Button = styled.button`
  width: 100px;
  height: 50px;

  font-size: 15px;
  text-transform: capitalize;
  color: white;
  background-color: #3289b1;
  border-radius: 4px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #154a63;
    border: 1px solid black;
  }
`;

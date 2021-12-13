import styled from "styled-components";

const Button = styled.div`
  padding: 12px 4px;
  margin: 12px;
  text-align: center;
  border: 1px solid gray;
  box-shadow: 1px 2px 1px 1px darkgrey;
  margin-top: 30px;
  cursor: pointer;
  color: initial;
  &:hover {
    box-shadow: none;
  }
`;

export { Button };

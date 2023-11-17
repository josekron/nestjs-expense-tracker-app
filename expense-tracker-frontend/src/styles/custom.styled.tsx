import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1em;
`;

export const ElementList = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr;
`;

export const ElementLabel = styled.span`
  background-color: #3b3c3f;
  color: white;
  padding: 1.5em 1em 0em 0em;
  float: left;
`;

export const ExpenseElementList = styled.div`
  display: grid;
  grid-auto-rows: 1fr;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const ExpenseElementLabel = styled.span`
  background-color: #3b3c3f;
  color: white;
  padding: 1.5em 1em 0em 0em;
  float: left;
  width: 100px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #282c34;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #282c34;
  border-radius: 3px;
  display: inline-block;
`;

export const Input = styled.input<{ $inputColor?: string }>`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.$inputColor || "#BF4F74"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
`;

export const TableElement = styled.table`
  padding: 0.5em;
  margin: 0.5em;
  align-items: left;
  justify-content: center;
`;

export const PaginationElement = styled.nav`
  display: inline-block;
`;

export const PaginationNumberElement = styled.a`
  display: inline;
  color: white;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
`;

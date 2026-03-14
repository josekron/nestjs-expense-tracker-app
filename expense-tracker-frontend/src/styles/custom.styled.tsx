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
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #282c34;
  font-size: 1em;
  margin: 1em;
  padding: 0.4em 1em;
  border: 2px solid #282c34;
  border-radius: 4px;
  background: #fff;
  cursor: pointer;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    background: #e8e8e8;
    border-color: #1a1a1a;
  }

  &:focus-visible {
    outline: 2px solid #61dafb;
    outline-offset: 2px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const Input = styled.input<{ $inputColor?: string; $hasError?: boolean }>`
  padding: 0.5em 0.75em;
  margin: 0.5em;
  color: #1a1a1a;
  background: #f0f0f0;
  border: 1px solid ${(props) => (props.$hasError ? "#c62828" : "#ccc")};
  border-radius: 4px;
  font-size: 1em;

  &:focus {
    outline: none;
    border-color: #282c34;
    box-shadow: 0 0 0 2px rgba(40, 44, 52, 0.2);
  }
`;

export const TableElement = styled.table`
  padding: 0.5em;
  margin: 0.5em;
  width: 100%;
  border-collapse: collapse;
  text-align: left;

  th,
  td {
    padding: 0.6em 0.75em;
    border-bottom: 1px solid rgba(255, 255, 255, 0.15);
  }

  th {
    font-weight: 600;
    color: rgba(255, 255, 255, 0.9);
  }

  tbody tr:hover {
    background: rgba(255, 255, 255, 0.05);
  }
`;

export const PaginationElement = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
`;

export const PaginationButton = styled.button<{ $active?: boolean }>`
  padding: 8px 14px;
  min-width: 40px;
  color: white;
  background: ${(props) => (props.$active ? "#282c34" : "transparent")};
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.95em;
  transition: background 0.15s ease, border-color 0.15s ease;

  &:hover:not(:disabled) {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.5);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }

  &:focus-visible {
    outline: 2px solid #61dafb;
    outline-offset: 2px;
  }
`;

export const ErrorMessage = styled.p`
  color: #ff8a80;
  font-size: 0.9em;
  margin: 0.5em 0 0;
`;

export const EmptyState = styled.p`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95em;
  margin: 0.5em 0;
  font-style: italic;
`;

import styled from 'styled-components';

export const TransactionHistoryTable = styled.table`
  background-color: #ffffff;
  width: 350px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-align: center;
  border-collapse: collapse;
  overflow: hidden;
  color: #363636;

  thead {
    background-color: #1d86af;
    color: #ffffff;
  }

  th {
    padding: 8px;
  }

  th:not(:last-child) {
    border-right: solid 1px #d6d6d6;
  }

  tr:nth-child(even) {
    background-color: #f4f4f4;
  }
  td {
    padding: 8px;
    text-align: center;
    border: 1px solid #d6d6d6;
  }
`;

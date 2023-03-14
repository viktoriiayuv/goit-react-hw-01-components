import styled from 'styled-components';

export function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsContainer = styled.section`
  background-color: #ffffff;
  width: 350px;
  margin: 0 auto 24px auto;
  padding-top: 32px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-align: center;

  .title {
    margin: 0 0 32px 0;
    font-size: 20px;
    font-weight: 700;
    color: #363636;
    text-transform: uppercase;
  }
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0;
  list-style: none;

  .item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-top: 1px solid #d6d6d6;
    width: 33%;
    &:not(:last-child) {
      border-right: 1px solid #d6d6d6;
    }
    span:not(:last-child) {
      margin-bottom: 5px;
    }
    .label {
      font-size: 12px;
      color: #363636;
    }
    .quantity {
      font-size: 20px;
      font-weight: 700;
      color: #363636;
    }
  }
`;

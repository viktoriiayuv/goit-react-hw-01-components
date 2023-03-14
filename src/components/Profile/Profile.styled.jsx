import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background-color: #ffffff;
  width: 350px;
  margin: 0 auto 24px auto;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-align: center;

  .description {
    padding: 32px;
  }

  .avatar {
    display: block;
    margin: 0 auto;
    width: 50%;
    border-radius: 50%;
  }

  .name {
    font-size: 20px;
    font-weight: 700;
    color: #363636;
  }

  .tag,
  .location {
    color: #7a7a7a;
  }

  .location {
    margin-bottom: 0;
  }
`;

export const ProfileStats = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #f5f4f4;
  padding: 0;
  list-style: none;

  li {
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
      color: #7a7a7a;
    }
    .quantity {
      font-size: 20px;
      font-weight: 700;
      color: #363636;
    }
  }
`;

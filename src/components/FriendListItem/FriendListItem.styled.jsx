import styled from 'styled-components';

export const FriendItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 16px;
  background-color: #ffffff;
  box-sizing: border-box;
  width: 350px;
  margin: 0 auto;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.12),
    0px 1px 1px 0px rgba(0, 0, 0, 0.12), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  text-align: center;

  .status {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #d40d0d;
  }

  .online {
    background-color: #097a1c;
  }
`;

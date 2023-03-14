import PropTypes from 'prop-types';
import { FriendItemContainer } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClass = isOnline ? 'status online' : 'status';
  return (
    <FriendItemContainer>
      <span className={statusClass}></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </FriendItemContainer>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

import PropTypes from 'prop-types';
import Friend from './Friend';
import style from './FriendList.module.css';

function FriendList({ friends }) {
  return (
    <ul className={style.friends}>
      {friends.map(item => (
        <Friend
          key={item.id}
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired
    }),
  ),
};

export default FriendList;
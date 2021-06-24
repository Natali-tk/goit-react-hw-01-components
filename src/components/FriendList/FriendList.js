import Friend from './Friend';
import PropTypes from 'prop-types';
import style from './FriendList.module.css';
function FriendList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          <Friend
            avatar={item.avatar}
            name={item.name}
            isOnline={item.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}


FriendList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default FriendList;

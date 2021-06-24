
import Profile from './components/Profile/Profile';
import FriendList from './components/FriendList/FriendList';
import user from './user.json';
import friends from './friends.json';

export default function App() {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />,
      <FriendList friends={friends} />
    </>
  );
}

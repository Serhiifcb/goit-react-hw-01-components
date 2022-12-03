import PropTypes from 'prop-types'
import { FriendListItem } from '../FriendListItem/FriendListItem';
import css from '../FriendList/FriendList.module.css'

export const FriendList = ({friends}) => {
  return (
    <ul className={css.friendsList}>
      {friends.map(friend => (
        <li className={css.friendsListItem} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  )
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
}
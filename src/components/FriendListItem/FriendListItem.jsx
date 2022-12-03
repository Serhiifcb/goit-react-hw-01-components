import PropTypes from 'prop-types'
import css from '../FriendListItem/FriendListItem.module.css'

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendsItemBlock}>
      <span className={`${css.friendsStatus} ${css[isOnline]}`}></span>
      <img className={css.friendsAvatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.friendsName}>{name}</p>
    </div>
  )
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
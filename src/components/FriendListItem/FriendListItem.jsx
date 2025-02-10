import css from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <>
    <img className={css.image} src={avatar} alt="Avatar" width="48" />
    <p className={css.name}>{name}</p>
    <p style={{ color: isOnline ? 'green' : 'red' }}>
      {isOnline ? 'Online' : 'Offline'}
    </p>
  </>
);

export default FriendListItem;

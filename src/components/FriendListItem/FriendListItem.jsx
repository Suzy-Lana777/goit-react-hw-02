import css from './FriendListItem.module.css';
import clsx from 'clsx';

export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.item}>
      <img
        className={css.avatar}
        src={avatar}
        alt={`${name} Avatar`}
        width="48"
      />
      <p className={css.name}>{name}</p>
      <p className={clsx(isOnline ? css.isOnline : css.isOffline)}>
        {isOnline ? 'Online' : 'Offline'}
      </p>
    </li>
  );
}

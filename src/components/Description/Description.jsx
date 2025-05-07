import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.section}>
      <div>
        <img className={css.img} src={image} alt={name + ' avatar'} />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{'@' + tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.ul}>
        <li className={css.li}>
          <span className={css.folloowers}>Followers</span>
          <span className={css.stats}>{stats.followers}</span>
        </li>
        <li className={css.li}>
          <span className={css.folloowers}>Views</span>
          <span className={css.stats}>{stats.views}</span>
        </li>
        <li className={css.li}>
          <span className={css.folloowers}>Likes</span>
          <span className={css.stats}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

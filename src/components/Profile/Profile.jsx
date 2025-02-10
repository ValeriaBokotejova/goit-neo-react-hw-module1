import css from './Profile.module.css';

const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.card}>
    <div className={css.profile}>
      <img className={css.image} src={image} alt="User avatar" />
      <p className={css.name}>{name}</p>
      <p className={css.tag}>@{tag}</p>
      <p className={css.location}>{location}</p>
    </div>
    <ul className={css.list}>
      <li className={css.item}>
        <span className={css.title}>Followers</span>
        <span className={css.value}>{stats.followers}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Views</span>
        <span className={css.value}>{stats.views}</span>
      </li>
      <li className={css.item}>
        <span className={css.title}>Likes</span>
        <span className={css.value}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

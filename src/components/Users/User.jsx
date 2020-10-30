import React from "react";
import styles from "./User.module.css";
import s from "./../Profile/MyPosts/MyPosts.module.css";
import usersPhoto from "./../../assets/images/defaultuser.png";
import { NavLink } from "react-router-dom";
import cx from "classnames";

let User = ({ user, followUnfollow, followingInProgress }) => {


  return (
    <div key={user.id} className={styles.user}>
      <div>
        <NavLink to={`/profile/` + user.id}>
          <img
            src={user.photos.small != null ? user.photos.small : usersPhoto}
            alt="user"
            className={styles.userPhoto}
          />
        </NavLink>
      </div>

      <div>
        <p className={styles.userName}>{user.name}</p>
        <button
          disabled={followingInProgress.some((id) => id === user.id)}
          className={
            user.followed ? cx(s.commonButtonDisabled, styles.followWidth) : cx(s.commonButton, styles.followWidth)
          }
          onClick={() => {
            user.followed ? followUnfollow(user.id, true) : followUnfollow(user.id, false);
          }}
        >
          {user.followed ? "unfollow" : "follow"}
        </button>
      </div>
    </div>
  );
};

export default User;

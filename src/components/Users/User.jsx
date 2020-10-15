import React from "react";
import styles from "./User.module.css";
import usersPhoto from "./../../assets/images/1505926268182046858.png";
import { NavLink } from "react-router-dom";

let User = ({ user, followUnfollow, followingInProgress }) => {
  return (
    <div key={user.id} className={styles.user}>
      <span>
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
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{"user.location.country"}</div>
              <div>{"user.location.city"}</div>
            </span>
          </span>
          <button
            disabled={followingInProgress.some((id) => id === user.id)}
            onClick={() => {
              user.followed ? followUnfollow(user.id, true) : followUnfollow(user.id, false);
            }}
          >
            {user.followed ? "follow" : "unfollow"}
          </button>
        </div>
      </span>
    </div>
  );
};

export default User;

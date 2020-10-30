import React from "react";
import User from "./User";
import s from "./User.module.css"

let Users = ({
  currentPage,
  onPageChanged,
  totalUserCount,
  pageSize,
  users,
  unfollow,
  follow,
  followingInProgress,
  followUnfollow,
  ...props
}) => {

  return (
    <div className={s.usersContainer}>
      {users.map((user) => (
        <User user={user} followingInProgress={followingInProgress} followUnfollow={followUnfollow} key={user.id} />
      ))}
    </div>
  );
};

export default Users;

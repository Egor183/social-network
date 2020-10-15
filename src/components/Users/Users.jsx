import React from "react";
import User from "./User";

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
    <div>
      {users.map((user) => (
        <User
          user={user}
          followingInProgress={followingInProgress}
          follow={follow}
          unfollow={unfollow}
          key={user.id}
          followUnfollow={followUnfollow}
        />
      ))}
    </div>
  );
};

export default Users;

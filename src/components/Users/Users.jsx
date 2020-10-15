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
        <User user={user} followingInProgress={followingInProgress} followUnfollow={followUnfollow} key={user.id} />
      ))}
    </div>
  );
};

export default Users;

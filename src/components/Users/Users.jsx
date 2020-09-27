import React from "react";
import Paginator from "../Common/Paginator/Paginator";
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
        />
      ))}
    </div>
  );
};

export default Users;

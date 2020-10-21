import React from "react";
import userPhoto from "./../../assets/images/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD.png";
import { NavLink } from "react-router-dom";
import { InputFileStyledBlue } from "../../styledComponents/ProfileInfo";
import { UserPhotoContainer } from "../../styledComponents/Users";
import { ColumnBlockStyled } from "../../styledComponents/Login";

let User = ({ user, followUnfollow, followingInProgress }) => {
  return (
    <ColumnBlockStyled className="blockUser" key={user.id}>
      <NavLink to={`/profile/` + user.id}>
        <UserPhotoContainer
          src={user.photos.small != null ? user.photos.small : userPhoto}
          alt="user"
        />
      </NavLink>
      <div>{user.name}</div>
      <div>{user.status}</div>
      <InputFileStyledBlue
        width="70"
        as="button"
        disabled={followingInProgress.some((id) => id === user.id)}
        onClick={() => {
          user.followed ? followUnfollow(user.id, true) : followUnfollow(user.id, false);
        }}
      >
        {user.followed ? "follow" : "unfollow"}
      </InputFileStyledBlue>
    </ColumnBlockStyled>
  );
};

export default User;

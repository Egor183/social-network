import React from "react";
import user from "./../../../../assets/images/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD.png";
import { PostStyled } from "../../../../styledComponents/MyPostsContainer";

const Post = (props) => {
  return (
    <PostStyled>
      <img src={props.profile.photos.large ? props.profile.photos.large : user} alt="" />
      {props.message}
    </PostStyled>
  );
};

export default Post;

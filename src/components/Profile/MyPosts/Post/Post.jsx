import React from "react";
import s from "./Post.module.css";
import usersPhoto from "./../../../../assets/images/defaultuser.png";

const Post = (props) => {
  return (
    <div className={s.item}>
      <img src={props.profile.photos.small ? props.profile.photos.small : usersPhoto} alt="" />
      <div className={s.postWriterInformation}>
        <div className={s.writerName}>{props.profile.fullName}</div>
        <div>{props.message}</div>
      </div>
    </div>
  );
};

export default Post;

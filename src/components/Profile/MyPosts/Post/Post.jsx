import React from "react";
import s from "./Post.module.css";

const Post = (props) => {
  console.log(props);
  return (
    <div className={s.item}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkUm8Lemuzy9dc-h2pqUD6pawuW0QK_bKwxg&usqp=CAU" alt="" />
      {props.message}
      <div>
        <span>like:</span>
        {props.likesCount}
      </div>
    </div>
  );
};

export default Post;

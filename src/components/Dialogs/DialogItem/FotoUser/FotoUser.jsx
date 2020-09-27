import React from "react";
import s from "../../Dialogs.module.css";

const ImageUser = (props) => {
  return (
    <div>
      <img className={s.userImage} src={props.src} alt="фото" />
    </div>
  );
};

export default ImageUser;

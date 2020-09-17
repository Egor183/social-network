import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preaolader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt="фото" />
        <ProfileStatus status="Hello Simpson" />
        <p>{props.aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;
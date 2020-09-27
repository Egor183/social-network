import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preaolader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";

const ProfileInfo = ({ profile, status, updateStatus, aboutMe }) => {
  if (!profile) {
    return <Preloader />;
  }
  return (
    <div>
      <div className={s.descriptionBlock}>
        <img src={profile.photos.large} alt="фото" />
        <ProfileStatusWithHooks
          status={status}
          updateStatus={updateStatus}
        />
        <p>{aboutMe}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

import React from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preaolader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/1505926268182046858.png";
const ProfileInfo = ({ profile, status, updateStatus, isOwner, meId, changeAvatar }) => {
  if (!profile) {
    return <Preloader />;
  }

  const avatarSelected = (e) => {
    if (e.target.files.length) {
      changeAvatar(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.userAvatar} src={profile.photos.large || UserAvatar} alt="фото" />
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {isOwner === meId ? <input type="file" onChange={avatarSelected} /> : null}
        <p>{profile.aboutMe || "there is no information about me"}</p>
      </div>
    </div>
  );
};

export default ProfileInfo;

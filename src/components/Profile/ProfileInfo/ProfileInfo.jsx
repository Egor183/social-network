import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/defaultuser.png";
import ProfileDataForm from "./ProfileDataForm";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = ({
  profile,
  status,
  updateStatus,
  isOwner,
  meId,
  changeAvatar,
  saveProfile,
  editMode,
  setEditMode,
}) => {
  const [visibility, setVisibility] = useState(false);

  const changeVisibility = (visibility) => {
    visibility ? setVisibility(false) : setVisibility(true);
  };

  const onSubmit = (profile) => {
    saveProfile(profile);
  };

  const avatarSelected = (e) => {
    if (e.target.files.length) {
      changeAvatar(e.target.files[0]);
    }
  };

  return (
    <div className={s.profileInfoContainer}>
      <div
        className={s.userAvatarContainer}
        onMouseLeave={() => changeVisibility(visibility)}
        onMouseEnter={() => changeVisibility(visibility)}
      >
        <img className={s.userAvatar} src={profile.photos.large || UserAvatar} alt="фото" />
        {isOwner === meId
          ? visibility && (
              <div className={s.inputFileWrapper}>
                <input className={s.inputFile} type="file" onChange={avatarSelected} />
              </div>
            )
          : null}
      </div>
      <div className={s.infoContainer}>
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} editMode={editMode} />
        {editMode ? (
          <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} setEditMode={setEditMode} />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} meId={meId} />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile }) => {
  return (
    <div>
      <div className={s.categoryName}>
        <span className={styles.input}>Full name:</span>
        {profile.fullName}
      </div>
      <div className={s.categoryName}>
        <span className={styles.input}>About me:</span>
        {profile.aboutMe || "there is no information about me"}
      </div>
      <div className={s.categoryName}>
        <span className={styles.input}>Looking for a job:</span> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div className={s.categoryName}>
          <span className={styles.input}>Professional skills:</span> {profile.lookingForAJobDescription}
        </div>
      )}
      <div className={s.categoryName}>
        <span className={styles.input}>Contacts:</span>
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactName={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
    </div>
  );
};

const Contact = ({ contactName, contactValue }) => {
  return (
    <div className={s.contact}>
      <span className={styles.input}>{contactName}:</span> {contactValue}
    </div>
  );
};

export default ProfileInfo;

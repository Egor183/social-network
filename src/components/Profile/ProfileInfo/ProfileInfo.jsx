import React, { useState } from "react";
import s from "./ProfileInfo.module.css";
import Preloader from "../../Common/Preaolader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/1505926268182046858.png";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, meId, changeAvatar, saveProfile }) => {
  let [editMode, setEditMode] = useState(false);
  if (!profile) {
    return <Preloader />;
  }

  const onSubmit = (profile) => {
    saveProfile(profile).then(() => {
      setEditMode(false);
    });
  };

  const avatarSelected = (e) => {
    if (e.target.files.length) {
      changeAvatar(e.target.files[0]);
    }
  };

  return (
    <div>
      <div className={s.descriptionBlock}>
        <img className={s.userAvatar} src={profile.photos.large || UserAvatar} alt="фото" />
        {isOwner === meId ? <input type="file" onChange={avatarSelected} /> : null}
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {editMode ? (
          <ProfileDataForm
            onSubmit={onSubmit}
            offEditMode={() => setEditMode(false)}
            initialValues={profile}
            profile={profile}
          />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} meId={meId} onEditMode={() => setEditMode(true)} />
        )}
      </div>
    </div>
  );
};

const ProfileData = ({ profile, onEditMode, isOwner, meId }) => {
  return (
    <div>
      <div>
        <b>Full name:</b>
        {profile.fullName}
      </div>
      <div>
        <b>About me:</b>
        {profile.aboutMe || "there is no information about me"}
      </div>
      <div>
        <b>Looking for a job:</b> {profile.lookingForAJob ? "yes" : "no"}
      </div>
      {profile.lookingForAJob && (
        <div>
          <b>Professional skills:</b> {profile.lookingForAJobDescription}
        </div>
      )}
      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactName={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
      {isOwner === meId ? <button onClick={onEditMode}>Edit mode</button> : null}
    </div>
  );
};

const Contact = ({ contactName, contactValue }) => {
  return (
    <div className={s.contact}>
      <b>{contactName}:</b> {contactValue}
    </div>
  );
};

export default ProfileInfo;

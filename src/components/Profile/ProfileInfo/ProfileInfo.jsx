import React from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import UserAvatar from "../../../assets/images/FAVPNG_samsung-galaxy-a8-a8-user-login-telephone-avatar_peutPpGD.png";
import ProfileDataForm from "./ProfileDataForm";

import {
  CategoryBoxStyled,
  CategoryNameStyled,
  InputFileStyledGray,
  ProfileInfoStyled,
} from "../../../styledComponents/ProfileInfo";

const ProfileInfo = ({ profile, status, updateStatus, isOwner, meId, changeAvatar, saveProfile, flag, setFlag }) => {
  const onSubmit = (profile) => {
    saveProfile(profile);
  };

  const avatarSelected = (e) => {
    if (e.target.files.length) {
      changeAvatar(e.target.files[0]);
    }
  };

  return (
    <ProfileInfoStyled>
      <div className="avatarBlock">
        <img className="userAvatar" src={profile.photos.large || UserAvatar} alt="фото" />
        {isOwner === meId ? (
          <InputFileStyledGray>
            <input type="file" onChange={avatarSelected} /> Change avatar
          </InputFileStyledGray>
        ) : null}
      </div>
      <div className="userInformation">
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
        {flag ? (
          <ProfileDataForm onSubmit={onSubmit} initialValues={profile} profile={profile} />
        ) : (
          <ProfileData profile={profile} isOwner={isOwner} meId={meId} onEditMode={() => setFlag(true)} />
        )}
      </div>
    </ProfileInfoStyled>
  );
};

const ProfileData = ({ profile, onEditMode, isOwner, meId }) => {
  return (
    <div>
      <CategoryBoxStyled>
        <CategoryNameStyled>Full name:</CategoryNameStyled>
        {profile.fullName}
      </CategoryBoxStyled>
      <CategoryBoxStyled>
        <CategoryNameStyled>About me:</CategoryNameStyled>
        {profile.aboutMe || "there is no information about me"}
      </CategoryBoxStyled>
      <CategoryBoxStyled>
        <CategoryNameStyled>Looking for a job:</CategoryNameStyled> {profile.lookingForAJob ? "yes" : "no"}
      </CategoryBoxStyled>
      {profile.lookingForAJob && (
        <CategoryBoxStyled>
          <CategoryNameStyled> Professional skills:</CategoryNameStyled> {profile.lookingForAJobDescription}
        </CategoryBoxStyled>
      )}
      <div>
        <CategoryNameStyled>Contacts:</CategoryNameStyled>
        {Object.keys(profile.contacts).map((key) => {
          return <Contact key={key} contactName={key} contactValue={profile.contacts[key]} />;
        })}
      </div>
      {isOwner === meId ? (
        <InputFileStyledGray as="button" onClick={onEditMode} className="editMode">
          Edit mode
        </InputFileStyledGray>
      ) : null}
    </div>
  );
};

const Contact = ({ contactName, contactValue }) => {
  return (
    <CategoryBoxStyled className="contact">
      <CategoryNameStyled>{contactName}:</CategoryNameStyled> {contactValue}
    </CategoryBoxStyled>
  );
};

export default ProfileInfo;

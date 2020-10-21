import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preaolader/Preloader";

const Profile = ({ profile, status, updateStatus, isOwner, meId, changeAvatar, saveProfile, flag, setFlag }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        meId={meId}
        changeAvatar={changeAvatar}
        saveProfile={saveProfile}
        flag={flag}
        setFlag={setFlag}
      />
      <MyPostsContainer profile={profile} />
    </div>
  );
};

export default Profile;

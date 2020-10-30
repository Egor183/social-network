import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Preloader from "../Common/Preaolader/Preloader";

const Profile = ({
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
        editMode={editMode}
        setEditMode={setEditMode}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

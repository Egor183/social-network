import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile,  status, updateStatus, isOwner, meId, changeAvatar }) => {

  return (
    <div>
      <ProfileInfo
        profile={profile}
        status={status}
        updateStatus={updateStatus}
        isOwner={isOwner}
        meId={meId}
        changeAvatar={changeAvatar}
      />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

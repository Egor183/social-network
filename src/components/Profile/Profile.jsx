import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = ({ profile, aboutMe, status, updateStatus }) => {
  return (
    <div>
      <ProfileInfo profile={profile} aboutMe={aboutMe} status={status} updateStatus={updateStatus} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;

import React from "react";
import {userData} from "../../helpers"

const Profile = () => {
  const { username } = userData();
  return (
    <div>
      <h2>welcome {username}</h2>
    </div>
  );
};

export default Profile;
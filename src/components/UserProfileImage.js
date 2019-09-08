import React from "react";
import { Image } from "semantic-ui-react";

const UserProfileImage = ({ username }) => (
  <img
    className="profile-image"
    alt={username}
    src={`https://avatars.dicebear.com/v2/jdenticon/${username}.svg`}
  />
);

export default UserProfileImage;

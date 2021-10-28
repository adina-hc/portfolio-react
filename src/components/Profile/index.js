import React from "react";
import profilePic from "../../images/adina-portfolio.JPG";

function Profile() {
  return (
    <div className="absolute">
      <img
        src={profilePic}
        alt="Profile Pic"
        className="rounded-full"
      />
    </div>
  );
}

export default Profile;

// ProfileDetails.js
import React from "react";
import Logo from "../components/ProfileDetails/Logo";
import AvatarSection from "../components/ProfileDetails/AvatarSection";
import LocationInput from "../components/ProfileDetails/LocationInput";
import NextButton from "../components/ProfileDetails/NextButton";
import { ProfileContainer, ProfileHeader } from "../components/ProfileDetails/index.js";

const ProfileDetails = () => {
  return (
    <div className="py-5 px-5 md:px-10 flex flex-col">
      <Logo />
      <ProfileContainer>
        <ProfileHeader />
        <AvatarSection />
        <LocationInput />
        <NextButton />
      </ProfileContainer>
    </div>
  );
};

export default ProfileDetails;

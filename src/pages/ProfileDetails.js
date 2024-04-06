// ProfileDetails.js
import React from "react";
import Logo from "../components/ProfileDetails/Logo";
import AvatarSection from "../components/ProfileDetails/AvatarSection";
import LocationInput from "../components/ProfileDetails/LocationInput";
import NextButton from "../components/ProfileDetails/NextButton";

const ProfileDetails = () => (
  <div className="py-10 px-5 md:px-10 flex flex-col">
    <Logo />
    <div className="max-w-[628px] self-center justify-center flex flex-col">
      <p className="text-black text-2xl font-bold mt-10 md:text-3xl">
        Welcome! Let's create your profile
      </p>
      <p className="text-base text-gray-500 font-light mt-4">
        Let others get to know you better!
      </p>
      <AvatarSection />
      <p className="text-xl text-black mt-12 font-bold">Add your location</p>
      <LocationInput />
      <NextButton />
    </div>
  </div>
);

export default ProfileDetails;

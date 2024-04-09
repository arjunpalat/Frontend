// DescribeYourself.js
import React from "react";
import { d1, d2, d3 } from "../assets/index.js";
import Logo from "../components/Describe/Logo";
import BackButton from "../components/Describe/BackButton";
import OptionCard from "../components/Describe/OptionCard";
import FinishButton from "../components/Describe/FinishButton";

const DescribeYourself = () => (
  <div className="py-3 px-5 md:px-10 flex flex-col">
    <div className="flex gap-8 items-center">
      <Logo />
      <BackButton />
    </div>
    <div className="self-center justify-center flex flex-col">
      <h1 className="text-black text-center text-2xl font-bold mt-10 md:text-3xl">
        What brings you to Dribbble?
      </h1>
      <p className="text-bas text-center text-gray-500 font-light mt-4">
        Select the options that best describe you. Don't worry, you can explore
        other options later.
      </p>
      <div className="flex flex-wrap justify-evenly gap-16 md:gap-6 mt-32">
        <OptionCard
          image={d1}
          title="I'm a designer looking to share my work"
          description="Get started and tap into a vast pool of talent and inspiration on
          Dribbble, the premier platform for designers worldwide"
          name="designer"
        />
        <OptionCard
          image={d2}
          title="I'm looking to hire a designer"
          description="Find your perfect design match with Dribbble's global network of
          talented designers ready to bring your vision to life"
          name="hire"
        />
        <OptionCard
          image={d3}
          title="I'm looking for a design inspiration"
          description="With over 7 million shots from a vast community of designers,
          Dribbble is the leading source for design inspiration"
          name="inspiration"
        />
      </div>
      <p className="font-bold text-base text-center mt-10">
        Anything else? You can select multiple
      </p>
      <FinishButton />
      <div className="text-gray-400 hidden md:block text-sm font-semibold self-center mt-2">
        or Press RETURN
      </div>
    </div>
  </div>
);

export default DescribeYourself;

import React from "react";
import { Footer, Navbar } from "../components/Confirm/index.js";
import { mail } from "../assets/index.js";

const ConfirmMail = () => {
  return (
    <div>
      <Navbar />
      <div className="flex flex-col gap-3 max-w-[588px] px-4 mx-auto items-center justify-center mt-20">
        <h1 className="text-2xl md:text-3xl font-bold">
          Please verify your email...
        </h1>
        <img src={mail} alt="mail" className="h-32 w-40"></img>
        <p className="text-base text-center text-gray-500 font-light">
          Please verify your email address. We've sent a confirmation email to:
        </p>
        <p className="text-base text-center text-black font-semibold">
          account@xyz.com
        </p>
        <p className="text-base text-center text-gray-500 font-light">
          Click the confirmation in that email to begin using Dribbble.
        </p>
        <p className="text-base text-center text-gray-500 font-light">
          Didn't receive the email? Check your Spam folder, it may have been
          caught by a filter. If you still don't see it, you can resend the
          confirmation email.
        </p>
        <p className="text-base text-center text-gray-500 font-light">
          Wrong email address? Change it.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default ConfirmMail;

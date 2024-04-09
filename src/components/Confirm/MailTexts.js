import { Text } from "../Confirm/index.js";
import { useUserState } from "../UserContext.js";
const MailTexts = () => {
  const { userDetails } = useUserState();
  return (
    <>
      <Text center>
        Please verify your email address. We've sent a confirmation email to:
      </Text>
      <Text color="text-black" center bold>
        {userDetails.email}
      </Text>
      <Text center>
        Click the confirmation in that email to begin using Dribbble.
      </Text>
      <Text center>
        Didn't receive the email? Check your Spam folder, it may have been
        caught by a filter. If you still don't see it, you can{" "}
        <span className="text-pink-500 font-semibold">resend the confirmation mail</span>.
      </Text>
      <Text center>
        Wrong email address?{" "}
        <span className="text-pink-500 font-semibold">Change it</span>.
      </Text>
    </>
  );
};

export default MailTexts;

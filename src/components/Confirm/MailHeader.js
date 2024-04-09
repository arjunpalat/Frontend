import { mail } from "../../assets/index.js";

const MailHeader = () => {
  return (
    <>
      <h1 className="text-2xl md:text-3xl font-bold">
        Please verify your email...
      </h1>
      <img src={mail} alt="mail" className="h-32 w-40"></img>
    </>
  );
};

export default MailHeader;
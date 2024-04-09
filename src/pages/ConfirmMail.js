import {
  Navbar,
  Footer,
  MailContainer,
  MailHeader,
  MailTexts,
} from "../components/Confirm/index.js";

const ConfirmMail = () => {
  return (
    <div>
      <Navbar />
      <MailContainer>
        <MailHeader />
        <MailTexts />
      </MailContainer>
      <Footer />
    </div>
  );
};

export default ConfirmMail;

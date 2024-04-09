const MailContainer = ({ children }) => {
  return (
    <div className="flex flex-col gap-3 max-w-[588px] px-4 mx-auto items-center justify-center mt-20">
      {children}
    </div>
  );
};

export default MailContainer;
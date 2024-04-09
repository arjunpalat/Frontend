const CardText = ({ title, description, checked }) => (
  <>
    <div className="font-bold text-center text-lg">{title}</div>
    <p
      className={`${
        !checked ? "hidden" : ""
      } text-sm text-center font-light text-slate-500`}
    >
      {description}
    </p>
  </>
);

export default CardText;
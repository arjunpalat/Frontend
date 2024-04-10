const LinkSection = ({ title, items }) => (
  <div className="mb-2">
    <div className="text-slate-800 font-semibold">{title}</div>
    {items.map((item, index) => (
      <div key={index} className="text-slate-800 mt-2">
        {item}
      </div>
    ))}
  </div>
);
export default LinkSection;

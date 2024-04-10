import {
  dribbble_icon,
  facebook_icon,
  instagram_icon,
  logo_pink,
  pinterest_icon,
  twitter_icon,
} from "../../assets";

const SocialHandle = () => {
  return (
    <div className="col-span-7 lg:col-span-2">
      <img src={logo_pink} alt="logo" className="w-24 h-auto" />
      <p className="text-slate-800 mt-4">
        Dribbble is the world’s leading community for creatives to share, grow,
        and get hired.
      </p>
      <div className="flex gap-4 mt-4 items-center">
        <img src={dribbble_icon} alt="dribbble" className="w-5 h-5" />
        <img src={twitter_icon} alt="twitter" className="w-6 h-6" />
        <img src={facebook_icon} alt="facebook" className="w-5 h-5" />
        <img src={instagram_icon} alt="instagram" className="w-5 h-5" />
        <img src={pinterest_icon} alt="pinterest" className="w-5 h-5" />
      </div>
    </div>
  );
}

export default SocialHandle
import {AiOutlineCopyrightCircle} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="w-screen h-36 flex flex-col items-center justify-center bg-black font-gotham text-gray-50">
      <h1 className="flex items-center justify-center italic text-xs">bikes renting system</h1>
      <h1 className="flex items-center justify-center italic text-xs">
        <AiOutlineCopyrightCircle />2022
      </h1>
    </div>
  );
};

export default Footer;

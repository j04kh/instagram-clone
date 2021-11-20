import Logo from "../public/logo.png";
import Image from "next/image";
import CameraIcon from "./icons/CameraIcon";
import ConfigIcon from "./icons/ConfigIcon";
import MessengerIcon from "./icons/MessengerIcon";
import InviteIcon from "./icons/InviteIcon";

interface Props {
  page?: string;
  username?: string;
}

const Navbar: React.FC<Props> = ({ page, username }) => {
  switch (page) {
    case "profile":
      return (
        <header className="w-full h-12 px-4 z-10 fixed bg-white border-b border-gray-300 flex items-center justify-between">
          <ConfigIcon />
          <h1 className="font-medium text-lg">{username}</h1>
          <InviteIcon />
        </header>
      );
    case "activity":
      return (
        <header className="w-full h-12 px-4 z-10 fixed bg-white border-b border-gray-300 flex items-center justify-center">
          <h1 className="font-medium text-lg">Acitivity</h1>
        </header>
      );
  }

  return (
    <header className="w-full h-12 px-4 z-10 fixed bg-white border-b border-gray-300 flex items-center justify-between">
      <CameraIcon />
      <Image
        src={Logo}
        alt="Logo"
        height={50}
        width={100}
        objectFit="contain"
      />
      <MessengerIcon />
    </header>
  );
};

export default Navbar;

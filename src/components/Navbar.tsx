import Logo from "../../public/logo.png";
import Image from "next/image";
import CameraIcon from "./icons/CameraIcon";
import ConfigIcon from "./icons/ConfigIcon";
import MessengerIcon from "./icons/MessengerIcon";
import InviteIcon from "./icons/InviteIcon";
import ChevronLeft from "./icons/ChevronLeft";
import React from "react";
import { useRouter } from "next/router";

interface Props {
  page?: string;
  username?: string;
}

const Navbar: React.FC<Props> = ({ page, username }) => {
  const router = useRouter();

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
    case "post":
      return (
        <header className="w-full h-12 px-4 z-10 fixed bg-white border-b border-gray-300 flex items-center justify-between">
          <button onClick={router.back}>
            <ChevronLeft />
          </button>

          <h1 className="font-medium text-lg">Post</h1>
          <div className="w-6" />
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

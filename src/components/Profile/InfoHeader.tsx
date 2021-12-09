import Image from "next/image";
import React from "react";

interface Props {
  username: string;
  name: string;
  description?: string;
  profilePicture?: string;
}

const defaultPicture = "/default.jpeg";

const InfoHeader: React.FC<Props> = ({
  username,
  name,
  description,
  profilePicture = defaultPicture,
}) => {
  return (
    <React.Fragment>
      <div className="w-full px-4 flex pt-16">
        <Image
          src={profilePicture}
          width={120}
          height={120}
          objectFit="contain"
          className="rounded-full"
        />
        <div className="flex-col ml-5 w-full">
          <h1 className="text-xl font-medium">{username}</h1>
          <div className="border-1 max-w-xs w-full mt-2 rounded-md h-8 border-2 border-gray-300 text-center">
            <p className="font-medium">Edit profile</p>
          </div>
        </div>
      </div>
      <div className="px-4 ">
        <h1 className="mt-3 text-lg font-medium">{name}</h1>
        <h2 className="text-sm mb-2">{description}</h2>
      </div>
    </React.Fragment>
  );
};

export default InfoHeader;

import Image from "next/image";
import React from "react";
import Button from "./Button";

interface Props {
  username: string;
  name: string;
  description?: string;
  profilePicture?: string;
  myProfile?: boolean;
  following?: boolean;
}

const defaultPicture = "/default.jpeg";

const InfoHeader: React.FC<Props> = ({
  username,
  name,
  description,
  profilePicture = defaultPicture,
  myProfile,
  following,
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
          <Button following />
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

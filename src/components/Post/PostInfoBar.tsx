import Image from "next/image";

interface Props {
  username: string;
  location?: string;
  profilePicture?: string;
}

const defaultPicture = "/default.jpeg";

const PostInfoBar: React.FC<Props> = ({
  username,
  location,
  profilePicture,
}) => {
  return (
    <div className="w-full h-16 bg-white flex items-center px-2">
      <div className="flex w-full">
        <div className="h-9 w-9 mr-2 rounded-full">
          <Image
            src={profilePicture || defaultPicture}
            width="50"
            height="50"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
        <div className="flex-col">
          <h1 className="text-sm font-semibold">{username}</h1>
          <h2 className="text-gray-700 text-xs font-medium">{location}</h2>
        </div>
      </div>
      <h1>...</h1>
    </div>
  );
};

export default PostInfoBar;

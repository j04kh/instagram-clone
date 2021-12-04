import Image from "next/image";

interface Props {
  self?: boolean;
  picture?: string;
  username: string;
}

const defaultPicture = "/default.jpeg";

const StoryPreview: React.FC<Props> = ({
  self,
  picture = defaultPicture,
  username,
}) => {
  return (
    <div className="items-center w-16 mx-2 text-center">
      <div
        className={`h-14 w-14 mx-auto mb-1 rounded-full border-2 border-gray-300 ${
          !self && "border-2 border-red-600"
        }`}
      >
        <Image
          src={picture}
          height={100}
          width={100}
          className="h-full w-full rounded-full border-2 border-white"
        />
      </div>
      <p className="text-xs truncate text-center">{username}</p>
    </div>
  );
};

export default StoryPreview;

import PostInfoBar from "./PostInfoBar";
import ActionsBar from "./ActionsBar";
import Description from "./Description";
import Image from "next/image";

interface Props {
  username: string;
  profilePicture?: string;
  location?: string;
  photo: string;
  likes: number;
  description?: string;
  timeAgo: string;
}

const Post: React.FC<Props> = ({
  username,
  location,
  likes,
  description,
  profilePicture,
  timeAgo,
  photo,
}) => {
  return (
    <div className="w-full bg-white flex-col">
      <PostInfoBar
        username={username}
        location={location}
        profilePicture={profilePicture}
      />
      <div className="w-full">
        <Image
          src={photo}
          width={1000}
          height={1000}
          objectFit="cover"
          layout="responsive"
        />
      </div>

      <ActionsBar />
      <Description
        username={username}
        likes={likes}
        description={description}
        timeAgo={timeAgo}
      />
    </div>
  );
};

export default Post;

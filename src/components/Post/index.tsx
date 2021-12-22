import PostInfoBar from "./PostInfoBar";
import ActionsBar from "./ActionsBar";
import Description from "./Description";
import Image from "next/image";

interface Props {
  username: string;
  user_id: string;
  profilePicture?: string;
  location?: string;
  photo: string;
  likes: string;
  description?: string;
  timeAgo: string;
}

const Post: React.FC<Props> = ({
  username,
  user_id,
  location,
  likes,
  description,
  profilePicture,
  timeAgo,
  photo,
}) => {
  return (
    <div className="w-full max-w-xl mx-auto bg-white flex-col border border-gray-100">
      <PostInfoBar
        username={username}
        user_id={user_id}
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
        user_id={user_id}
        username={username}
        likes={likes}
        description={description}
        timeAgo={timeAgo}
      />
    </div>
  );
};

export default Post;

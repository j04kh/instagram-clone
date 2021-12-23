import Navbar from "components/Navbar";
import Post from "../../components/Post/index";
import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
import type { PostType } from "../../types/index";

const post: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const DEFAULT_PICTURE = "/default.jpeg";

  const [postData, setPostData] = useState<PostType>({
    _id: "",
    username: "",
    user_id: "",
    location: "",
    likes: "",
    description: "",
    profilePicture: "",
    timeAgo: "",
    photo: "",
  });

  useSWR(`/api/posts/${id}`, (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPostData(data.post))
  );
  return (
    <div className="w-full h-screen">
      <Navbar page="post" />
      <div className="w-full h-full pt-12">
        <Post
          username={postData.username}
          user_id={postData.user_id}
          location={postData.location}
          likes={postData.likes}
          description={postData.description}
          profilePicture={postData.profilePicture || DEFAULT_PICTURE}
          timeAgo={postData.timeAgo}
          photo={postData.photo || DEFAULT_PICTURE}
        />
      </div>
    </div>
  );
};

export default post;

import Image from "next/image";
import type { PostType } from "../../types/index";
import useSWR from "swr";
import { useState } from "react";
import React from "react";

interface Props {
  username: string;
}

const PostsGrid: React.FC<Props> = ({ username }) => {
  const [posts, setPosts] = useState<PostType[]>();

  useSWR(`/api/posts`, (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data.posts))
  );

  const getPosts = () => {
    let userPosts = null;
    if (posts) {
      userPosts = posts.map(
        (post: PostType) =>
          post.username === username && (
            <Image
              key={post.photo}
              src={post.photo}
              width={100}
              height={100}
              objectFit="cover"
              layout="responsive"
            />
          )
      );
      return userPosts;
    }

    return <React.Fragment>{userPosts}</React.Fragment>;
  };

  return (
    <div className="w-full h-auto grid grid-cols-3 pb-12">{getPosts()}</div>
  );
};

export default PostsGrid;

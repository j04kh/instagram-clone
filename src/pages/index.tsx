import React from "react";
import Navbar from "../components/Navbar";
import StoriesBar from "../components/StoriesBar";
import Post from "../components/Post";
import useSWR from "swr";
import type { PostType } from "../types/index";

const Home: React.FC = () => {
  const { data: posts, error: postsError } = useSWR("/api/posts", (url) =>
    fetch(url).then((res) => res.json())
  );
  const { data: stories, error: storiesError } = useSWR("/api/stories", (url) =>
    fetch(url).then((res) => res.json())
  );

  const getPosts = () => {
    const postsList: PostType[] = posts.posts.map((post: PostType) => {
      return (
        <Post
          key={post._id}
          username={post.username}
          user_id={post.user_id}
          location={post.location}
          likes={post.likes}
          timeAgo={post.timeAgo}
          photo={post.photo}
          profilePicture={post.profilePicture}
          description={post.description}
        />
      );
    });
    return <React.Fragment>{postsList}</React.Fragment>;
  };

  return (
    <div className="w-full h-full min-w-screen min-h-screen">
      <Navbar />
      <main className="w-full pb-12 pt-12 flex-1 flex-col lg:pt-32">
        {stories && <StoriesBar stories={stories} />}
        {posts && getPosts()}
      </main>
    </div>
  );
};

export default Home;

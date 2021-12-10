import type { GetStaticProps, NextPage } from "next";
import Navbar from "../components/Navbar";
import StoriesBar from "../components/StoriesBar";
import Post from "../components/Post";
import React from "react";

type Post = {
  _id: string;
  username: string;
  profilePicture: string;
  location: string;
  photo: string;
  likes: string;
  description: string;
  timeAgo: string;
};

const Home: NextPage<any> = ({ posts, stories }) => {
  const getPosts = () => {
    const postsList: Post[] = posts.map((post: Post) => {
      return (
        <Post
          key={post._id}
          username={post.username}
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
        <StoriesBar stories={stories} />
        {getPosts()}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const postsRes = await fetch("http://localhost:3000/api/posts");
  const postsData = await postsRes.json();
  const storiesRes = await fetch("http://localhost:3000/api/stories");
  const storiesData = await storiesRes.json();
  return {
    props: { posts: postsData.posts, stories: storiesData.stories },
  };
};

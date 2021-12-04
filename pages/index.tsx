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

const Home: NextPage<any> = ({ posts }) => {
  const getPosts = () => {
    const postsList: Post[] = posts.reverse().map((post: Post) => {
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
    <div className="w-screen h-screen bg-gray-100 ">
      <Navbar />
      <main className="w-full pb-12 pt-12 flex-1 flex-col">
        <StoriesBar />
        {getPosts()}
      </main>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();
  return {
    props: { posts: data.posts },
  };
};

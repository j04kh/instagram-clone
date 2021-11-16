import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import StoriesBar from "../components/StoriesBar";
import Post from "../components/Post";

const Home: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 ">
      <Navbar />
      <main className="w-full pb-12 pt-12 flex-1 flex-col">
        <StoriesBar />
        <Post
          username="johndoe_"
          location="San Francisco, California"
          likes={234}
          timeAgo="2 hours ago"
          photo="/sample.jpg"
          profilePicture="/avatar1.png"
        />
      </main>
    </div>
  );
};

export default Home;

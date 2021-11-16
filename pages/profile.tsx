import type { NextPage } from "next";
import Navbar from "../components/Navbar";
import InfoHeader from "../components/Profile/InfoHeader";
import Numbers from "../components/Profile/Numbers";
import StoriesBar from "../components/StoriesBar";
import PostsGrid from "../components/Profile/PostsGrid";

const profile: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 ">
      <Navbar page="profile" username="johndoe_" />
      <InfoHeader
        username="johndoe_"
        name="John Doe"
        description="Description about my profile 🚀 "
        profilePicture="/avatar1.png"
      />
      <StoriesBar profile />
      <Numbers posts={23} followers={849} following={4848} />
      <PostsGrid />
    </div>
  );
};

export default profile;

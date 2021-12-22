import type { NextPage } from "next";
import Navbar from "../../components/Navbar";
import InfoHeader from "../../components/Profile/InfoHeader";
import Numbers from "../../components/Profile/Numbers";
import StoriesBar from "../../components/StoriesBar";
import PostsGrid from "../../components/Profile/PostsGrid";

const Profile: NextPage = () => {
  return (
    <div className="w-screen h-screen bg-gray-100 ">
      <Navbar page="profile" username="johndoe_" />
      <main className="w-full h-full max-w-lg mx-auto">
        <InfoHeader
          username="johndoe_"
          name="John Doe"
          description="Description about my profile 🚀 "
          profilePicture="/avatar1.png"
        />
        <StoriesBar profile />
        <Numbers posts={"0"} followers={"849"} following={"4848"} />
        <PostsGrid username="johndoe_" />
      </main>
    </div>
  );
};

export default Profile;

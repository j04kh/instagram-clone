import React from "react";
import Navbar from "../../components/Navbar";
import InfoHeader from "../../components/Profile/InfoHeader";
import Numbers from "../../components/Profile/Numbers";
import PostsGrid from "../../components/Profile/PostsGrid";
import useSWR from "swr";
import { useRouter } from "next/router";
import { useState } from "react";
import type { User } from "../../types/index";

const DEFAULT_PICTURE = "/default.jpeg";

const Profile: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const [userData, setUserData] = useState<User>({
    id: "",
    username: "",
    nickname: "",
    profilePicture: "",
    description: "",
    postsQty: "",
    followersQty: "",
    followingQty: "",
    posts: [],
  });

  useSWR(`/api/users/${id}`, (url) =>
    fetch(url)
      .then((res) => res.json())
      .then((data) => setUserData(data.user))
  );

  return (
    <div className="w-screen h-screen bg-gray-100 ">
      <Navbar page="profile" username={userData.username} />
      <main className="w-full h-full max-w-lg mx-auto">
        <InfoHeader
          username={userData.username}
          name={userData.nickname}
          description={userData.description}
          profilePicture={userData.profilePicture || DEFAULT_PICTURE}
        />
        <Numbers
          posts={userData.postsQty}
          followers={userData.followersQty}
          following={userData.followingQty}
        />
        <PostsGrid username={userData.username} />
      </main>
    </div>
  );
};

export default Profile;

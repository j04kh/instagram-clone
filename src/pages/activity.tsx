import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Notification from "../components/Notification";

const activity: NextPage = () => {
  return (
    <>
      <Navbar page="activity" />
      <div className="w-full px-3 py-12 min-h-screen flex-col">
        <h1 className="my-2 font-bold text-sm">This month</h1>
        <Notification
          username="dev123"
          date="1d"
          type={1}
          profilePicture="https://iili.io/7WqNkv.jpg"
          postPreview="/sample.jpg"
        />
        <Notification
          username="traveler19"
          date="1w"
          type={1}
          profilePicture="https://iili.io/7WqwYJ.jpg"
          postPreview="/sample.jpg"
        />
        <Notification
          username="usfkljldjkflk3"
          date="1w"
          type={0}
          profilePicture="/default.jpeg"
        />
        <Notification
          username="marta_123"
          date="2w"
          type={0}
          profilePicture="https://iili.io/7Wqj2a.jpg"
        />
        <Notification
          username="user4"
          date="1w"
          type={1}
          profilePicture="/default.jpeg"
          postPreview="/sample.jpg"
        />
      </div>
    </>
  );
};

export default activity;

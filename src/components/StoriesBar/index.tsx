import StoryPreview from "./StoryPreview";
import React from "react";

type Story = {
  _id: string;
  username: string;
  profilePicture?: string;
  photo?: string;
  timeAgo?: string;
};

const StoriesBar: React.FC<any> = ({ profile, stories }) => {
  const getStories = () => {
    const storiesList: Story[] = stories.posts.map((story: Story) => {
      return (
        <StoryPreview
          key={story._id}
          username={story.username}
          profilePicture={story.profilePicture}
        />
      );
    });
    return <React.Fragment>{storiesList}</React.Fragment>;
  };

  return profile ? (
    <div className="w-full h-24 bg-gray-100 border-b border-gray-300 overflow-x-scroll flex items-center">
      <StoryPreview self={true} username="New" profilePicture="/new.png" />
    </div>
  ) : (
    <div className="w-screen h-24 max-w-xl mx-auto bg-gray-50 border border-gray-200 overflow-x-scroll flex items-center lg:hidden">
      <StoryPreview
        self={true}
        username="Your Story"
        profilePicture="/avatar1.png"
      />
      {getStories()}
    </div>
  );
};

export default StoriesBar;

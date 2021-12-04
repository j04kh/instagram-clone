import StoryPreview from "./StoryPreview";

interface Props {
  profile?: boolean;
}

const StoriesBar: React.FC<Props> = ({ profile }) => {
  return profile ? (
    <div className="w-screen h-24 bg-gray-100 border-1 border-b border-gray-300 overflow-x-scroll flex items-center">
      <StoryPreview self={true} username="New" picture="/new.png" />
    </div>
  ) : (
    <div className="w-screen h-24 bg-gray-100 border-1 border-b border-gray-300 overflow-x-scroll flex items-center">
      <StoryPreview self={true} username="Your Story" picture="/avatar1.png" />
      <StoryPreview username="user123" />
    </div>
  );
};

export default StoriesBar;

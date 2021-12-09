import StoryPreview from "./StoryPreview";

interface Props {
  profile?: boolean;
}

const StoriesBar: React.FC<Props> = ({ profile }) => {
  return profile ? (
    <div className="w-full h-24 bg-gray-100 border-b border-gray-300 overflow-x-scroll flex items-center">
      <StoryPreview self={true} username="New" picture="/new.png" />
    </div>
  ) : (
    <div className="w-screen h-24 max-w-xl mx-auto bg-gray-50 border border-gray-200 overflow-x-scroll flex items-center lg:hidden">
      <StoryPreview self={true} username="Your Story" picture="/avatar1.png" />
      <StoryPreview username="user123" />
    </div>
  );
};

export default StoriesBar;

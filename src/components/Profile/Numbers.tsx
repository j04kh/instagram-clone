interface Props {
  posts: string;
  followers: string;
  following: string;
}

const Numbers: React.FC<Props> = ({ posts, followers, following }) => {
  return (
    <div className="w-full h-16 px-10 flex items-center text-gray-700 text-sm font-light justify-between border-b border-gray-300">
      <div className="flex-col">
        <h1 className="text-black font-bold text-md text-center">{posts}</h1>
        <p>Posts</p>
      </div>
      <div className="flex-col">
        <h1 className="text-black font-bold text-md text-center">
          {followers}
        </h1>
        <p>Followers</p>
      </div>
      <div className="flex-col">
        <h1 className="text-black font-bold text-md text-center">
          {following}
        </h1>
        <p>Following</p>
      </div>
    </div>
  );
};

export default Numbers;

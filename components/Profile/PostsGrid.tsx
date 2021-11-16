import Image from "next/image";

const PostsGrid: React.FC = () => {
  return (
    <div className="w-full h-auto grid grid-cols-3 pb-12">
      <Image src="/sample.jpg" width={100} height={100} objectFit="cover" />
      <div className="bg-yellow-400 w-full h-32"></div>
      <div className="bg-blue-400 w-full h-32"></div>
      <div className="bg-green-400 w-full h-32"></div>
      <div className="bg-red-400 w-full h-32"></div>
      <div className="bg-gray-800 w-full h-32"></div>
      <div className="bg-yellow-400 w-full h-32"></div>
      <div className="bg-blue-400 w-full h-32"></div>
      <div className="bg-green-400 w-full h-32"></div>
      <div className="bg-red-400 w-full h-32"></div>
      <div className="bg-gray-800 w-full h-32"></div>
      <div className="bg-yellow-400 w-full h-32"></div>
      <div className="bg-blue-400 w-full h-32"></div>
      <div className="bg-green-400 w-full h-32"></div>
      <div className="bg-red-400 w-full h-32"></div>
      <div className="bg-gray-800 w-full h-32"></div>
      <div className="bg-yellow-400 w-full h-32"></div>
      <div className="bg-blue-400 w-full h-32"></div>
      <div className="bg-green-400 w-full h-32"></div>
      <div className="bg-red-400 w-full h-32"></div>
      <div className="bg-gray-800 w-full h-32"></div>
    </div>
  );
};

export default PostsGrid;

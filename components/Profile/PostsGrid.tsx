import Image from "next/image";

const PostsGrid: React.FC = () => {
  return (
    <div className="w-full h-auto grid grid-cols-3 pb-12">
      <Image
        src="/sample.jpg"
        width={100}
        height={100}
        objectFit="cover"
        layout="responsive"
      />
    </div>
  );
};

export default PostsGrid;

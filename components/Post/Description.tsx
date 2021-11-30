import React from "react";

interface Props {
  likes: number;
  username: string;
  description?: string;
  timeAgo: string;
}

const Description: React.FC<Props> = ({
  likes,
  username,
  description,
  timeAgo,
}) => {
  return (
    <React.Fragment>
      <h1 className="px-4 font-medium">
        {likes !== 0 ? `${likes} likes` : "No one liked this post yet"}
      </h1>
      <h1 className="px-4 font-medium">
        {username}
        <span className="font-light"> {description}</span>
      </h1>
      <h2 className="text-gray-600 px-4 mt-1 pb-4 text-xs">{timeAgo}</h2>
    </React.Fragment>
  );
};

export default Description;

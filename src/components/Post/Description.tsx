import React from "react";
import Link from "next/link";

interface Props {
  user_id: string;
  likes: string;
  username: string;
  description?: string;
  timeAgo: string;
}

const Description: React.FC<Props> = ({
  user_id,
  likes,
  username,
  description,
  timeAgo,
}) => {
  return (
    <React.Fragment>
      <h1 className="px-4 font-medium">
        {likes !== "0" ? `${likes} likes` : "No one liked this post yet"}
      </h1>
      <Link href={`/profile/${user_id}`}>
        <a className="px-4 font-medium">
          {username}
          <span className="font-light"> {description}</span>
        </a>
      </Link>
      <h2 className="text-gray-600 px-4 mt-1 pb-4 text-xs">{timeAgo}</h2>
    </React.Fragment>
  );
};

export default Description;

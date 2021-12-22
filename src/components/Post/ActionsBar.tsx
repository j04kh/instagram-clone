import React from "react";
import LikeIcon from "../icons/LikeIcon";
import CommentIcon from "../icons/CommentIcon";
import ShareIcon from "../icons/ShareIcon";
import SavePostIcon from "../icons/SavePostIcon";

const ActionsBar: React.FC = () => {
  return (
    <div className="w-full h-12 px-2 flex justify-between items-center">
      <div className="flex">
        <LikeIcon />
        <CommentIcon />
        <ShareIcon />
      </div>

      <SavePostIcon />
    </div>
  );
};

export default ActionsBar;

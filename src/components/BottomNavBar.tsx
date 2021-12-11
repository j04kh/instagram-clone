import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import CreatePostIcon from "./icons/CreatePostIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import ProfileIcon from "./icons/ProfileIcon";
import React from "react";

interface Props {
  page: string;
  profilePicture: string;
}

const BottomNavBar: React.FC<Props> = ({ page, profilePicture }) => {
  return (
    <React.Fragment>
      <nav className="w-full h-14 px-4 bg-white border-t border-gray-300 fixed bottom-0">
        <div className="w-full my-2 flex items-center justify-between">
          <HomeIcon page={page} />
          <SearchIcon page={page} />
          <CreatePostIcon />
          <NotificationsIcon page={page} />
          <ProfileIcon page={page} picture={profilePicture} />
        </div>
        <div className="w-full">
          <p className="text-center text-gray-600 text-xs">
            This is a study case project, not the original page.
          </p>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default BottomNavBar;

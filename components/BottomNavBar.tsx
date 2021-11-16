import HomeIcon from "./icons/HomeIcon";
import SearchIcon from "./icons/SearchIcon";
import CreatePostIcon from "./icons/CreatePostIcon";
import NotificationsIcon from "./icons/NotificationsIcon";
import ProfileIcon from "./icons/ProfileIcon";

interface Props {
  page: string;
  profilePicture: string;
}

const BottomNavBar: React.FC<Props> = ({ page, profilePicture }) => {
  return (
    <nav className="w-full h-12 px-4 bg-white border-t border-gray-300 flex items-center justify-between fixed bottom-0">
      <HomeIcon page={page} />
      <SearchIcon page={page} />
      <CreatePostIcon />
      <NotificationsIcon page={page} />
      <ProfileIcon page={page} picture={profilePicture} />
    </nav>
  );
};

export default BottomNavBar;

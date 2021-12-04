import Image from "next/image";
import Link from "next/link";

interface Props {
  page: string;
  picture: string;
}

const defaultPicture = "/default.jpeg";

const ProfileIcon: React.FC<Props> = ({ page, picture = defaultPicture }) => {
  return page === "/profile" ? (
    <div className="h-6 w-6 mr-2 rounded-full border-2 border-gray-900">
      <Image
        src="/avatar1.png"
        width="50"
        height="50"
        className="rounded-full"
      />
    </div>
  ) : (
    <Link href="/profile">
      <a>
        <div className="h-6 w-6 mr-2 rounded-full">
          <Image
            src="/avatar1.png"
            width="50"
            height="50"
            objectFit="contain"
            className="rounded-full"
          />
        </div>
      </a>
    </Link>
  );
};

export default ProfileIcon;

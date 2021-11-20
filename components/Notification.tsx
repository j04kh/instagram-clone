import Image from "next/image";

interface Props {
  username: string;
  profilePicture?: string;
  postPreview?: string;
  date: string;
  type: NotificationType;
}

enum NotificationType {
  follow,
  like,
  comment,
  tag,
}

const defaultPicture = "/default.jpeg";

const Notification: React.FC<Props> = ({
  username,
  profilePicture = defaultPicture,
  postPreview = defaultPicture,
  date,
  type,
}) => {
  switch (type) {
    case NotificationType.follow:
      return (
        <div className="h-16 w-full items-center flex">
          <div className="w-full h-full flex items-center">
            <div className="w-14 h-14 absolute flex items-center rounded-full">
              <Image
                src={profilePicture}
                width={50}
                height={50}
                objectFit="contain"
                alt="User profile picture"
              />
            </div>

            <p className="text-sm ml-16 mr-3">
              <span className="font-medium">{username}</span> started following
              you.
              <span className="font-light text-gray-600"> {date}</span>
            </p>
          </div>
          {/* fix images sizes */}
          <button className="px-4 py-1 bg-blue-500 rounded-md">
            <p className="text-white text-sm">Follow</p>
          </button>
        </div>
      );
    default:
      return (
        <div className="h-16 w-full items-center flex">
          <div className="w-full h-full flex items-center">
            <Image
              src={profilePicture}
              width={50}
              height={50}
              objectFit="contain"
              alt="User profile picture"
              className="h-14 w-14 rounded-full bg-gray-700"
            />

            <p className="text-sm mx-3 overflow-clip">
              <span className="font-medium">{username}</span> liked your post.
              <span className="font-light text-gray-600"> {date}</span>
            </p>
          </div>

          <Image
            src={postPreview}
            width={50}
            height={50}
            objectFit="cover"
            alt="Post preview"
            className="h-12 w-12"
          />
        </div>
      );
  }
};

export default Notification;

interface Props {
  myProfile?: boolean;
  following?: boolean;
}

const Button: React.FC<Props> = ({ myProfile, following }) => {
  if (myProfile) {
    return (
      <div className="border-1 max-w-xs w-full mt-2 rounded-md h-8 border-2 border-gray-300 text-center">
        <p className="font-medium">Edit profile</p>
      </div>
    );
  } else {
    if (following) {
      return (
        <div className="border-1 max-w-xs w-full mt-2 rounded-md h-8 border-2 border-gray-300 text-center">
          <p className="font-medium">Following</p>
        </div>
      );
    } else {
      return (
        <div className="border-1 bg-blue-500 max-w-xs w-full mt-2 rounded-md h-8 border-2 border-gray-300 text-center">
          <p className="font-medium text-white">Follow</p>
        </div>
      );
    }
  }
};

export default Button;

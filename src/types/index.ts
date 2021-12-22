export type PostType = {
  _id: string;
  username: string;
  profilePicture: string;
  location: string;
  photo: string;
  likes: string;
  description: string;
  timeAgo: string;
};

export type User = {
  id: string;
  username: string;
  nickname: string;
  profilePicture: string;
  description: string;
  postsQty: string;
  followersQty: string;
  followingQty: string;
  posts: string[];
};

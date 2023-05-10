import React from "react";
import { SimplePost } from "~/models/post";
import Avatar from "./Avatar";
import Image from "next/image";
import CommentForm from "./CommentForm";
import ActionBar from "./ActionBar";

interface PostListCardProps {
  post: SimplePost;
  priority?: boolean;
}

const PostListCard = ({ post, priority = false }: PostListCardProps) => {
  const { userImage, username, image, createAt, likes, text } = post;

  return (
    <article className="rounded-lg shadow-md border border-gray-200">
      <div className="flex items-center p-2">
        <Avatar image={userImage} size="medium" highlight />
        <span className="text-gray-900 font-bold ml-2">{username}</span>
      </div>
      <Image
        className="w-full object-cover aspec-square"
        src={image}
        alt={`photo by ${username}`}
        width={500}
        height={500}
        priority={priority}
      />
      <ActionBar
        likes={likes}
        username={username}
        text={text}
        createAt={createAt}
      />
      <CommentForm />
    </article>
  );
};

export default PostListCard;

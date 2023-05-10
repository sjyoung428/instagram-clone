"use client";

import React from "react";
import useSWR from "swr";
import { SimplePost } from "~/models/post";

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  console.log(posts);

  return (
    <ul>{posts && posts.map((post) => <li key={post.id}>{post.text}</li>)}</ul>
  );
};

export default PostList;

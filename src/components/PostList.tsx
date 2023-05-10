"use client";

import React from "react";
import { GridLoader } from "react-spinners";
import useSWR from "swr";
import { SimplePost } from "~/models/post";
import PostListCard from "./PostListCard";

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  console.log(posts);

  return (
    <section>
      {loading && (
        <div>
          <GridLoader color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;

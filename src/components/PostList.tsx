"use client";

import React from "react";
import useSWR from "swr";
import { SimplePost } from "~/models/post";
import PostListCard from "./PostListCard";
import GridSpinner from "./ui/GridSpinner";

const PostList = () => {
  const { data: posts, isLoading: loading } =
    useSWR<SimplePost[]>("/api/posts");

  return (
    <section>
      {loading && (
        <div className="text-center mt-32">
          <GridSpinner color="red" />
        </div>
      )}
      {posts && (
        <ul>
          {posts.map((post) => (
            <li key={post.id} className="mb-4">
              <PostListCard post={post} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default PostList;

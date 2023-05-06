"use client";

import useSWR from "swr";

const FollowingBar = () => {
  const { data, isLoading, error } = useSWR("/api/me");
  console.log(data);
  return <p>FollowingBar</p>;
};

export default FollowingBar;

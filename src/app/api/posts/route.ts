import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getFollowingPostsOf } from "~/service/posts";

export const GET = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return getFollowingPostsOf(user.username).then((data) =>
    NextResponse.json(data)
  );
};

import { getServerSession } from "next-auth";
import { NextRequest, NextResponse } from "next/server";
import { getFollowingPostsOf, getPost } from "~/service/posts";
import { authOptions } from "../../auth/[...nextauth]/route";

interface Context {
  params: { id: string };
}

export const GET = async (request: NextRequest, context: Context) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  const { id } = context.params;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return getPost(id).then((data) => NextResponse.json(data));
};

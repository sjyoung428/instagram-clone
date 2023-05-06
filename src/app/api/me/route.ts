import { NextApiRequest, NextApiResponse } from "next";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/route";
import { getUserByUsername } from "~/service/user";

export const GET = async (req: NextApiRequest) => {
  const session = await getServerSession(authOptions);
  const user = session?.user;

  if (!user) {
    return new Response("Unauthorized", { status: 401 });
  }

  return getUserByUsername(user.username).then((data) =>
    NextResponse.json(data)
  );
};

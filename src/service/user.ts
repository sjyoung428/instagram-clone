import { client } from "./sanity";

interface OAuthUser {
  id: string;
  email: string;
  name: string;
  username: string;
  image?: string | null;
}

export const addUser = async ({
  id,
  email,
  username,
  name,
  image,
}: OAuthUser) => {
  return client.createIfNotExists({
    _id: id,
    _type: "user",
    username,
    email,
    image,
    name,
    following: [],
    followers: [],
    bookmarks: [],
  });
};

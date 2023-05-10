import { SimplePost } from "~/models/post";
import { client, urlFor } from "./sanity";

const simplePostProjection = `
  ...,
  "username": author->username,
  "userImage": author->image,
  "image": photo,
  "likes": likes[]->username,
  "text" : comments[0].comment,
  "comments": count(comments),
  "id" : _id,
  "createAt": _createdAt,
`;

export const getFollowingPostsOf = async (username: string) => {
  return client
    .fetch(
      `
    *[_type == "post" && author->username == "${username}"
     || author._ref in *[_type == "user" && username == "${username}"].following[]._ref] 
     | order(_createdAt desc) {${simplePostProjection}}
  `
    )
    .then((posts: SimplePost[]) =>
      posts.map((post) => ({ ...post, image: urlFor(post.image) }))
    );
};

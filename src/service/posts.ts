import { FullPost, SimplePost } from "~/models/post";
import { client, urlFor } from "./sanity";

const simplePostProjection = `
  ...,
  "username":author->username,
  "userImage":author->image,
  "image":photo,
  "likes":likes[]->username,
  "text":comments[0].comment,
  "comments": count(comments),
  "id":_id,
  "createAt": _createdAt,
`;

export const getFollowingPostsOf = async (username: string) => {
  return client
    .fetch<SimplePost[]>(
      `
    *[_type == "post" && author->username == "${username}"
     || author._ref in *[_type == "user" && username == "${username}"].following[]._ref] 
     | order(_createdAt desc) {${simplePostProjection}}
  `
    )
    .then((posts) =>
      posts.map((post) => ({ ...post, image: urlFor(post.image) }))
    );
};

export const getPost = async (id: string) => {
  return client
    .fetch<FullPost>(
      `*[_type == "post" && _id == "${id}"][0]{
        ...,
        "username": author->username,
        "userImage": author->image,
        "image": photo,
        "likes": likes[]->username,
        comments[]{comment, "username": author->username, "image": author->image},
        "id":_id,
        "createAt":_creatdAt
      }`
    )
    .then((post) => ({ ...post, image: urlFor(post.image) }));
};

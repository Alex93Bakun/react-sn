import React from "react";

import Post from "./Post/Post";
import { AddNewPostFormRedux } from "./AddPostForm/AddPostForm";

import s from "./MyPosts.module.scss";

const MyPosts = React.memo((props) => {
  const addNewPost = (values) => {
    props.addPost(values.newPostText);
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddNewPostFormRedux onSubmit={addNewPost} />
      <div>New post</div>
      <div className={s.posts}>
        {props.postsData.map((post) => (
          <Post
            key={post.id}
            message={post.message}
            likesCount={post.likesCount}
          />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;

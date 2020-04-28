import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";
import Post from "./Post";

const PostControl = () => {
  const postControlStyles = {};
  return (
    <div style={postControlStyles}>
      <h1> PostControl </h1>
      <PostList />
      <NewPostForm />
      <PostDetails />
      <Post />
    </div>
  );
};

export default PostControl;

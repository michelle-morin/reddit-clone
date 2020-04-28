import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = (props) => {
  return (
    <React.Fragment>
      {Object.values(props.postList).map((post) => {
        return (
          <Post
            title={post.title}
            postDate={post.postDate}
            body={post.body}
            upvote={post.upvote}
            downvote={post.downvote}
            whenDownvoteClicked={props.onClickingDownvote}
            whenUpvoteClicked={props.onClickingUpvote}
            whenPostClicked={props.onClickingPost}
            id={post.id}
          />
        );
      })}
    </React.Fragment>
  );
};

PostList.proTypes = {
  postList: PropTypes.object,
  onClickingPost: PropTypes.func,
  onClickingDownvote: PropTypes.func,
  onClickingUpvote: PropTypes.func
};

export default PostList;

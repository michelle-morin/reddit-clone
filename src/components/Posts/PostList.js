import React from "react";
import Post from "./Post";
import PropTypes from "prop-types";

const PostList = (props) => {

  const cardStyles = {
    marginBottom: '1%',
    padding: '2%'
  };

  return (
    <React.Fragment>
      {Object.values(props.postList).sort((a, b) => {
        return (b.upvote - b.downvote) - (a.upvote - a.downvote);
      }).map((post) => {
        return (
          <div style={cardStyles}>
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
          </div>
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

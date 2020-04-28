import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";
import Header from "../Layout/Header";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container, Button } from "react-bootstrap";

function PostControl(props) {
  const postControlStyles = {};
  const { dispatch } = props;

  const handleClick = () => {
    if (props.selectedPost !== null) {
      const action = {
        type: "CHANGE_TO_NULL"
      };
      dispatch(action);
    } else {
      const action = {
        type: "TOGGLE_FORM"
      };
      dispatch(action);
    }
  };

  const handleChangingSelectedPost = (id) => {
    const thisPost = props.masterPostList[id];

    const action = {
      type: "CHANGE_SELECTED",
      title: thisPost.title,
      body: thisPost.body,
      upvote: thisPost.upvote,
      downvote: thisPost.downvote,
      postDate: thisPost.postDate,
      id: thisPost.id
    };
    dispatch(action);
  };

  const handleUpvote = () => {
    console.log("upvote");
  };

  const handleDownvote = () => {
    console.log("updownvote");
  };

  const handleNewPost = (newPost) => {
    const { id, title, body, upvote, downvote, postDate } = newPost;
    const action = {
      type: "ADD_POST",
      id: id,
      title: title,
      body: body,
      upvote: upvote,
      downvote: downvote,
      postDate: postDate
    };
    dispatch(action);
    const actionTwo = { type: "TOGGLE_FORM" };
    dispatch(actionTwo);
  };

  let currentView;
  let buttonText;
  if (props.selectedPost !== null) {
    currentView = (
      <PostDetails post={props.selectedPost} whenUpvoteClicked={handleUpvote} whenDownvoteClicked={handleDownvote} />
    );
    buttonText = "return to posts";
  } else if (props.formVisible) {
    currentView = <NewPostForm onNewPostCreation={handleNewPost} />;
    buttonText = "return to posts";
  } else {
    currentView = (
      <PostList
        postList={props.masterPostList}
        onClickingPost={handleChangingSelectedPost}
        onClickingUpvote={handleUpvote}
        onClickingDownvote={handleDownvote}
      />
    );
    buttonText = "Add Post";
  }

  return (
    <React.Fragment>
      <Header buttonText={buttonText} whenButtonClick={handleClick} />
      <Container style={postControlStyles}>{currentView}</Container>
    </React.Fragment>
  );
}

PostControl.propTypes = {
  masterPostList: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
    masterPostList: state.masterPostList,
    formVisible: state.formVisible,
    selectedPost: state.selectedPost
  };
};

PostControl = connect(mapStateToProps)(PostControl);

export default PostControl;

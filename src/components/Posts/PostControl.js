import React from "react";
import PostList from "./PostList";
import NewPostForm from "./NewPostForm";
import PostDetails from "./PostDetails";
import Post from "./Post";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { Container } from "react-bootstrap";

function PostControl(props) {
  const postControlStyles = {};
  return (
    <Container style={postControlStyles}>
      <h1> PostControl </h1>
      <PostList postList={props.masterPostList} />
      <NewPostForm />
      <PostDetails />
    </Container>
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

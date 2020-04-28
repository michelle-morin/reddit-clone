import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const PostDetails = (props) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h1> {props.post.title} </h1>
        </Card.Title>
        <Card.Body>
          <p>Posted on {new Date(props.post.postDate).toLocaleString()}</p>
          <p>{props.post.body}</p>
          <p>Up Votes: {props.post.upvote}</p>
          <p>Down Votes: {props.post.downvote}</p>
          <Button onClick={() => props.whenUpvoteClicked(props.post.id)}>Up Vote</Button>
          <Button onClick={() => props.whenDownvoteClicked(props.post.id)}>Down Vote</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
};

export default PostDetails;

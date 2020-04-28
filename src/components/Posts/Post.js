import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h1> {props.title} </h1>
        </Card.Title>
        <Card.Body>
          <p>Posted on {new Date(props.postDate).toLocaleString()}</p>
          <p>{props.body}</p>
          <p> Total Score: {props.upvote - props.downvote} </p>
          <p>Up Votes: {props.upvote}</p>
          <p>Down Votes: {props.downvote}</p>
          <Button variant="outline-secondary" onClick={() => props.whenPostClicked(props.id)}>
            Post Details
          </Button>
          <Button onClick={() => props.whenUpvoteClicked(props.id)}>Up Vote</Button>
          <Button onClick={() => props.whenDownvoteClicked(props.id)}>Down Vote</Button>
        </Card.Body>
      </Card>
    </React.Fragment>
  );
};

Post.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  upvote: PropTypes.number,
  downvote: PropTypes.number,
  postDate: PropTypes.number,
  id: PropTypes.string,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func,
  whenPostClicked: PropTypes.func
};

export default Post;

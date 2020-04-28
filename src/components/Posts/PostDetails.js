import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const PostDetails = (props) => {
  const { post, whenDownvoteClicked, whenUpvoteClicked } = props;
  return (
    <React.Fragment>
      <Card>
        <Card.Title>
          <h1> {post.title} </h1>
        </Card.Title>
        <Card.Body>
          <p>Posted on {new Date(post.postDate).toLocaleString()}</p>
          <p>{post.body}</p>
          <p> Total Score: {post.upvote - post.downvote} </p>
          <p>Up Votes: {post.upvote}</p>
          <p>Down Votes: {post.downvote}</p>
          <Button
            onClick={() => {
              whenUpvoteClicked(post.id);
            }}
          >
            Up Vote
          </Button>
          <Button onClick={() => whenDownvoteClicked(post.id)}>Down Vote</Button>
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

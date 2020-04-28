import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const PostDetails = (props) => {
  const { post, whenDownvoteClicked, whenUpvoteClicked } = props;

  const cardStyles = {
    margin: '10px',
    padding: '2%'
  };

  const buttons = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  const title = {
    paddingLeft: '20px',
    paddingTop: '10px'
  }

  return (
    <React.Fragment>
      <div style={cardStyles}>
        <Card>
          <Card.Title>
            <h1 style={title}> {post.title} </h1>
          </Card.Title>
          <Card.Body>
            <p>Posted on {new Date(post.postDate).toLocaleString()}</p>
            <p>{post.body}</p>
            <p> Total Score: {post.upvote - post.downvote} </p>
            <p>Up Votes: {post.upvote}</p>
            <p>Down Votes: {post.downvote}</p>
            <div style={buttons}>
              <Button variant="outline-success" onClick={() => { whenUpvoteClicked(post.id); }}>
                <i class="fas fa-thumbs-up"></i> Up Vote
              </Button>
              <Button variant="outline-danger" onClick={() => whenDownvoteClicked(post.id)}> <i class="fas fa-thumbs-down"></i> Down Vote</Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </React.Fragment>
  );
};

PostDetails.propTypes = {
  post: PropTypes.object,
  whenUpvoteClicked: PropTypes.func,
  whenDownvoteClicked: PropTypes.func
};

export default PostDetails;

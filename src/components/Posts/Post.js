import React from "react";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";

const Post = (props) => {
  const buttons = {
    display: 'flex',
    justifyContent: 'space-around'
  };

  const title = {
    paddingLeft: '20px',
    paddingTop: '10px'
  };

  const cardStyles = {
    padding: '2%'
  };

  const preview = props.body.slice(0, 125) + "...";

  return (
    <React.Fragment>
      <div style={cardStyles}>
        <Card>
          <Card.Title>
            <h1 style={title}> {props.title} </h1>
          </Card.Title>
          <Card.Body>
            <p>Posted on {new Date(props.postDate).toLocaleString()}</p>
            <p>{preview}</p>
            <p> Total Score: {props.upvote - props.downvote} </p>
            <p>Up Votes: {props.upvote}</p>
            <p>Down Votes: {props.downvote}</p>
            <div style={buttons}>
              <Button variant="outline-secondary" onClick={() => props.whenPostClicked(props.id)}>
                Post Details
              </Button>
              <Button variant="outline-success" onClick={() => props.whenUpvoteClicked(props.id)}><i class="fas fa-thumbs-up"></i> Up Vote </Button>
              <Button variant="outline-danger" onClick={() => props.whenDownvoteClicked(props.id)}> <i class="fas fa-thumbs-down"></i> Down Vote </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
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

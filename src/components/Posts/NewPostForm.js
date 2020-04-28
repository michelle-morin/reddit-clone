import React from "react";
import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { v4 } from "uuid";

const NewPostForm = (props) => {
  function handleNewPostSubmission(event) {
    event.preventDefault();
    props.onNewPostCreation({
      title: event.target.title.value,
      body: event.target.body.value,
      upvote: 0,
      downvote: 0,
      postDate: Date.now(),
      id: v4()
    });
  }

  const title = {
    marginTop: '5%'
  }

  const buttonStyles = {
    margin: 'auto auto',
    display: 'block',
  }

  return (
    <React.Fragment>
      <h1 style={title}> Add New Post </h1>
      <Form onSubmit={handleNewPostSubmission}>
        <Form.Group controlId="formBasicTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" name="title" placeholder="title" />
          <Form.Text className="text-muted">What do you want to name your post.</Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicBody">
          <Form.Label>Body</Form.Label>
          <Form.Control as="textarea" rows="3" name="body" placeholder="Give us all the detail" />
        </Form.Group>

        <Button style={buttonStyles} variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );
};

NewPostForm.propTypes = {
  onNewPostCreation: PropTypes.func
};

export default NewPostForm;

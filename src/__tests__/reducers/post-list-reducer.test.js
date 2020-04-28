import postListReducer from "../../reducers/post-list-reducer";

describe("postListReducer", () => {
  let action;
  const postData = {
    title: "Title",
    body: "Body",
    upvote: 3,
    downvote: 2,
    postDate: "current date",
    id: 1
  };

  const currentState = {
    1: {
      title: "Title",
      body: "Body",
      upvote: 3,
      downvote: 2,
      postDate: "current date",
      id: 1
    },
    2: {
      title: "Title2",
      body: "Body2",
      upvote: 3,
      downvote: 2,
      postDate: "current date",
      id: 2
    }
  };

  test("should return default state if there is no action type passed into the reducer", () => {
    expect(postListReducer({}, { type: null })).toEqual({});
  });

  test("Should successfully add new post data to masterPostList", () => {
    const { title, body, upvote, downvote, postDate, id } = postData;
    action = {
      type: "ADD_POST",
      title: title,
      body: body,
      upvote: upvote,
      downvote: downvote,
      postDate: postDate,
      id: id
    };
    expect(postListReducer({}, action)).toEqual({
      [id]: {
        title: title,
        body: body,
        upvote: upvote,
        downvote: downvote,
        postDate: postDate,
        id: id
      }
    });
  });

  test("Should successfully delete a post", () => {
    action = {
      type: "DELETE_POST",
      id: 1
    };
    expect(postListReducer(currentState, action)).toEqual({
      2: {
        title: "Title2",
        body: "Body2",
        upvote: 3,
        downvote: 2,
        postDate: "current date",
        id: 2
      }
    });
  });
});

import selectedPostReducer from "../../reducers/selected-post-reducer";

describe("selectedPostReducer", () => {
  let action;

  test("should return default state if no action type is recongized", () => {
    expect(selectedPostReducer(null, { type: null })).toEqual(null);
  });

  test("Should successfully set selectedPost to the post passed to the reducer", () => {
    action = {
      type: "CHANGE_SELECTED",
      title: "hello",
      body: "world",
      upvote: 10,
      downvote: 8,
      postDate: "today",
      id: 1
    };
    expect(selectedPostReducer(null, action)).toEqual({
      title: "hello",
      body: "world",
      upvote: 10,
      downvote: 8,
      postDate: "today",
      id: 1
    });
  });

  test("Should set selectedPost to null", () => {
    action = {
      type: "CHANGE_TO_NULL"
    };

    expect(selectedPostReducer({}, action)).toEqual(null);
  });
});

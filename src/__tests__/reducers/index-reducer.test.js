import formVisibleReducer from "../../reducers/form-visible-reducer";
import postListReducer from "../../reducers/post-list-reducer";
import selectedPostReducer from "../../reducers/selected-post-reducer";
import rootReducer from "../../reducers/index";
import { createStore } from "redux";

let store = createStore(rootReducer);

describe("rootReducer", () => {
  let action;

  test("Should return default state if no type is recognized", () => {
    expect(rootReducer({}, { type: null })).toEqual({
      masterPostList: {},
      formVisible: false,
      selectedPost: null
    });
  });

  test("Check that modified state of postListReducer matches rootReducer", () => {
    action = {
      type: "ADD_POST",
      title: "title",
      body: "body",
      upvote: 1,
      downvote: 2,
      postDate: "postDate",
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().masterPostList).toEqual(postListReducer(undefined, action));
  });

  test("Check that modified state of selectedPostReducer matches rootReducer", () => {
    action = {
      type: "CHANGE_SELECTED",
      title: "title",
      body: "body",
      upvote: 1,
      downvote: 2,
      postDate: "postDate",
      id: 1
    };
    store.dispatch(action);
    expect(store.getState().selectedPost).toEqual(selectedPostReducer(undefined, action));
  });

  test("Check that modified state of formVisibleReducer mathches rootReducer", () => {
    action = {
      type: "TOGGLE_FORM"
    };
    store.dispatch(action);
    expect(store.getState().formVisible).toEqual(formVisibleReducer(undefined, action));
  });
});

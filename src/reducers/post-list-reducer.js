export default (state = {}, action) => {
  const { title, body, upvote, downvote, postDate, id } = action;
  switch (action.type) {
    case "ADD_POST":
      return Object.assign({}, state, {
        [id]: {
          title: title,
          body: body,
          upvote: upvote,
          downvote: downvote,
          postDate: postDate,
          id: id
        }
      });

    case "DELETE_POST":
      const newState = { ...state };
      delete newState[id];
      return newState;

    case "UPVOTE":
      const updatedUpvote = (state[id].upvote += 1);
      const upvoteState = { ...state, [id]: { ...state[id], upvote: updatedUpvote } };
      return upvoteState;

    case "DOWNVOTE":
      const updatedDownvote = (state[id].downvote += 1);
      const downvoteState = { ...state, [id]: { ...state[id], downvote: updatedDownvote } };
      return downvoteState;

    default:
      return state;
  }
};

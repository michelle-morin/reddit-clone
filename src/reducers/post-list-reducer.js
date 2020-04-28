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
    default:
      return state;
  }
};

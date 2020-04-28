export default (state = null, action) => {
  const { title, body, upvote, downvote, postDate, id } = action;

  switch (action.type) {
    case "CHANGE_SELECTED":
      const newState = {
        title: title,
        body: body,
        upvote: upvote,
        downvote: downvote,
        postDate: postDate,
        id: id
      };
      return newState;
    case "CHANGE_TO_NULL":
      const nullState = null;
      return nullState;
    default:
      return state;
  }
};

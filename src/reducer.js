export const initState = {
  users: [],
  posts: [],
};
export const reducer = (state, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.users,
      };
    case "SET_POSTS":
      return {
        ...state,
        posts: action.posts,
      };
    default:
      return state;
  }
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "rotate":
      return {
        ...state,
        rotating: action.payload,
      };
    case "text":
      return {
        ...state,
        text: action.payload,
      };
    case "user_data":
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

export const shouldDisplayRandomReducer = (state = true, action) => {
  switch (action.type) {
    case 'DISPLAY_RANDOM':
      return action.shouldDisplay;
    default:
      return state;
  }
};
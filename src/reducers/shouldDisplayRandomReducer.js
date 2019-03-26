export const shouldDisplayRandomReducer = (state = false, action) => {
  switch (action.type) {
    case 'DISPLAY_RANDOM':
      return action.shouldDisplay;
    default:
      return state;
  }
};
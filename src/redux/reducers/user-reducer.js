const initialState = {
  user: null,
};

function user(state=initialState, action) {
  switch (action.type) {
    case 'SET_AUTHORIZED_USER':
      state.user = action.user;
      return state;
    default:
      return state;
  }
}

export default user;

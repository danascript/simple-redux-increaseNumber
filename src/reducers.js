import * as actions from "./actions";

function appReducer(state = { number: 0 }, action) {
  switch (action.type) {
    case actions.INCREASE_NUMBER:
      return {
        ...state,
        number: state.number + action.amount
      };

    default:
      return state;
  }
}

export default appReducer;

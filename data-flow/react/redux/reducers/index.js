import { combineReducers } from 'redux';

const name = (state = { name: '' }, action) => {
  switch (action.type) {
    case 'SET_NAME': {
      return {
        ...state,
        name: action.name,
      };
    }
    default:
      return state;
  }
};


export default combineReducers({
  name,
});

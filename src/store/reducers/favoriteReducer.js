import {
  ADD_IMG_TO_FAVORITE,
  REMOVE_IMG_FROM_FAVORITE,
} from '../constants/actionTypes';

const initialState = {};
const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_IMG_TO_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };
    case REMOVE_IMG_FROM_FAVORITE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export default favoriteReducer;

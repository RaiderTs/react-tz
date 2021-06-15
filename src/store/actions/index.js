import {
  ADD_IMG_TO_FAVORITE,
  REMOVE_IMG_FROM_FAVORITE,
} from '../constants/actionTypes';

export const setImgToFavorite = image => ({
  type: ADD_IMG_TO_FAVORITE,
  payload: image,
});

export const removeImgFromFavorite = id => ({
  type: REMOVE_IMG_FROM_FAVORITE,
  payload: id
});

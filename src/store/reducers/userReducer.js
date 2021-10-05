import { GET_USERS, GET_POSTS } from '../types';

const initialState = {
  users: [],
  loading: true,
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    default:
      return state;
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
      };
  }
}

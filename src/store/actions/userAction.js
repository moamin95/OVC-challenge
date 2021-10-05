import { GET_USERS, USERS_ERROR, POSTS_ERROR, GET_POSTS } from '../types';
import axios from 'axios';

export const getUsers = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/users`
    );

    dispatch({
      type: GET_USERS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(error),
    });
  }
};

export const getUserPosts = (id) => async (dispatch) => {
  try {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?userId=${id}`
    );
    dispatch({
      type: GET_POSTS,
      payload: result.data,
    });
  } catch (error) {
    dispatch({
      type: POSTS_ERROR,
      payload: console.log(error),
    });
  }
};

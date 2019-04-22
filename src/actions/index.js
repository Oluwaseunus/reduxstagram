import { ADD_COMMENT, INCREMENT_LIKES, REMOVE_COMMENT } from './types';

export const increment = index => ({
  type: INCREMENT_LIKES,
  index
});

export const addComment = (postId, author, comment) => ({
  type: ADD_COMMENT,
  postId,
  author,
  comment
});

export const removeComment = (postId, index) => ({
  type: REMOVE_COMMENT,
  postId,
  index
});

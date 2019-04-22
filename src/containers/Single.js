import React from 'react';
import { connect } from 'react-redux';

import Photo from './Photo';
import Comments from '../components/Comments';

import { increment, addComment, removeComment } from '../actions/index';

const Single = ({
  addComment,
  comments,
  increment,
  match,
  posts,
  removeComment
}) => {
  const { postId } = match.params,
    i = posts.findIndex(post => post.code === postId),
    post = posts[i],
    postComments = comments[postId] || [];

  return (
    <div>
      <div className='single-photo'>
        <Photo
          index={i}
          post={post}
          comments={comments}
          increment={increment}
        />

        <Comments
          postComments={postComments}
          postId={postId}
          addComment={addComment}
          removeComment={removeComment}
        />
      </div>
    </div>
  );
};

const mapStateToProps = ({ posts, comments }) => ({
  posts,
  comments
});

export default connect(
  mapStateToProps,
  {
    increment,
    addComment,
    removeComment
  }
)(Single);

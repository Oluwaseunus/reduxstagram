import React, { useRef } from 'react';

const Comments = ({ addComment, postComments, postId, removeComment }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const author = authorRef.current.value;
    const comment = commentRef.current.value;
    addComment(postId, author, comment);
    formRef.current.reset();
  };

  const formRef = useRef(null);
  const authorRef = useRef(null);
  const commentRef = useRef(null);

  const renderComment = (comment, index) => (
    <div className='comment' key={index}>
      <p>
        <strong>{comment.user}</strong>
        {comment.text}
        <button
          className='remove-comment'
          onClick={() => removeComment(postId, index)}
        >
          &times;
        </button>
      </p>
    </div>
  );

  return (
    <div>
      {postComments.map(renderComment)}
      <form ref={formRef} className='comment-form' onSubmit={handleSubmit}>
        <input type='text' ref={authorRef} placeholder='author' />
        <input type='text' ref={commentRef} placeholder='comment' />
        <input type='submit' hidden />
      </form>
    </div>
  );
};

export default Comments;

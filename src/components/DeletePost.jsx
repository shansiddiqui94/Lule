import React from 'react';

function DeletePost({ postId, handleDeletePost }) {
  function handleClick() {
    if (window.confirm('Are you sure you want to delete this post?')) {
      handleDeletePost(postId);
    }
  }

  return (
    <button onClick={handleClick}>Delete</button>
  );
}

export default DeletePost;

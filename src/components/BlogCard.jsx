import React from 'react';
import DeletePost from './DeletePost';

function BlogCard({ post, handleDeletePost }) {
  return (
    <div className="card">
      <div className="info">
        <h2>{post.name}</h2>
        <p>{post.email}</p>
        <p>{post.blog}</p>
        <DeletePost postId={post.id} handleDeletePost={handleDeletePost} />
      </div>
    </div>
  );
}

export default BlogCard;

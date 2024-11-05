import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPostPage = ({ posts }) => {
  const { id } = useParams();
  const post = posts.find(post => post.id === parseInt(id));

  if (!post) {
    return <h2>Post not found!</h2>;
  }

  return (
    <div className="blogpost">
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      <p>{post.content}</p>
    </div>
  );
};

export default BlogPostPage;

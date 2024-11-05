import React from 'react';

const BlogList = ({ posts }) => {
  if (!posts || posts.length === 0) {
    return <p>No posts available.</p>;
  }

  return (
    <div className="blogcontainer">
      {posts.map((post) => (
        <a key={post.id} href={`/blog/${post.id}`} className="blogs">
          <h3 className="blogtitle">{post.title}</h3>
          <p className="blogdescription">{post.description}</p>
        </a>
      ))}
    </div>
  );
};

export default BlogList;
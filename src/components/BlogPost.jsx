import React from 'react';
import BlogPost from './BlogPost';

const BlogList = ({ posts }) => (
  <div className="content">
    <h2>My Posts</h2>
    <div className="blogcontainer">
      {posts.map((post, index) => (
        <BlogPost 
          key={index}
          title={post.title} 
          description={post.description} 
          link={`/blog/${post.id}`}
        />
      ))}
    </div>
  </div>
);

export default BlogList;
import React from "react";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <img src={post.image} alt={post.title} />
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
};

export default Post;

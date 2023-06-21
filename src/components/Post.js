import React from "react";
import ScrollToTop from "../components/ScrollToTop";

const Post = ({ post }) => {
  return (
    <div className="Post">
      <img src={post.image} alt={post.title} />
      <h2>{post.title}</h2>
      <br />
      <h4>{post.content}</h4>
      <br />
      <p>Published on: {post.date}</p>
      <ScrollToTop />
    </div>
  );
};

export default Post;

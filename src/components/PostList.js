import React from "react";
import Post from "./Post";

const PostList = () => {
  // Post data
  const posts = [
    {
      id: 1,
      title: "DK shape to Hawaii",
      content: `If you're a passionate Drop Knee rider, you may like the following bodyboard which is heading to HAWAII.
    We've crafted a custom 44" DK Cork bodyboard with an array of enhanced features, tailor-made to perform in the Jack Stance style.
    The design combines functionality, durability, and style to deliver an unparalleled riding experience. With its raised rails, you'll have precise control and maneuverability.
    The nose rocker and single-to-double concave design provide the perfect blend of speed, agility, and stability. Reinforced with V stringers for added strength and responsiveness.
    This bodyboard is also crafted with stamped rails. Really cool design! 😎🤙`,
      image: "https://i.ibb.co/b1GZ1QY/DK.jpg",
    },
    {
      id: 2,
      title: "Timber bottom with inlays",
      content:
        'Introducing Glynn, our loyal customer from Taranaki who is back for more with his stunning 42" timber slick cork bodyboard and a trusty pair of Vektor fins. Featuring eye-catching inlays of Redwood and Paulownia, this board is not only high-performing but also a work of art - its design even inspired by Glynn himself! With its undeniable beauty, it could easily double as a wall decoration. We are thrilled to see Glynn enjoying his board and can not wait to see where his next adventure takes him.',
      image: "https://i.ibb.co/L0MS9Pb/glynn.jpg",
    },
  ];

  return (
    <div className="PostList">
      <h2>Blog posts</h2>
      <div className="PostList__container">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default PostList;

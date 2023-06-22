import React from "react";
import Post from "./Post";
import Footer from "./Footer";

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
      alt: "Drop knee bodyboard",
      date: "21-05-23",
    },
    {
      id: 2,
      title: "Timber bottom with inlays",
      content:
        'Introducing Glynn, our loyal customer from Taranaki who is back for more with his stunning 42" timber slick cork bodyboard and a trusty pair of Vektor fins. Featuring eye-catching inlays of Redwood and Paulownia, this board is not only high-performing but also a work of art - its design even inspired by Glynn himself! With its undeniable beauty, it could easily double as a wall decoration. We are thrilled to see Glynn enjoying his board and can not wait to see where his next adventure takes him.',
      image: "https://i.ibb.co/L0MS9Pb/glynn.jpg",
      alt: "Timber bottom bodyboard",
      date: "09-04-23",
    },
    {
      id: 3,
      title: "KIDS bodyboard",
      content:
        "This is a kids’ boogie board that I enjoyed the process of it! The shark drawing was created by a father to his son. The son loves sharks, and the board is heading to Gisborne NZ as we speak 😀👍",
      image: "https://i.ibb.co/xqX0S27/kids-shark.jpg",
      alt: "Kids bodyboard",
      date: "01-12-22",
    },
    {
      id: 4,
      title: "Custom bodyboard to NY",
      content:
        "A laser engraved Horseshoe crab on a cork bodyboard heading to NY 🇺🇸 with a set of Vektor fins. Horseshoe crabs can be observed at many beaches and parks in NYC. Horseshoe crabs are marine and brackish water arthropods of the family Limulidae and the only living members of the order Xiphosura. Despite their name, they are not true crabs or crustaceans; they are chelicerates, most closely related to arachnids, such as spiders and scorpions. Wikipedia",
      image: "https://i.ibb.co/WV4tsSx/NY.jpg",
      alt: "Custom bodyboard package to New York City",
      date: "26-08-23",
    },
    {
      id: 5,
      title: "VOW blades",
      content:
        "A small army of the VOW blades have recently arrived in Australia. Check them out ! vowboards.com.au The shape of the Blade is specifically designed for performance, from channels on the bottom to help hold your line in the heaviest of waves, to thumb/grip grooves on the deck for comfort and easier handling in the water. The curved rail profile allows for you to not only set your line, but also to release and adjust whilst on the wave to optimise your ride. The bat tail adds a little extra surface area to help with your lift and also allows you to choose which arm your leash goes on. ",
      image: "https://i.ibb.co/Q8rSKcD/VOW.jpg",
      alt: "VOW hand blades",
      date: "31-07-22",
    },
    {
      id: 6,
      title: "Sponsorship",
      content:
        "Meet Dylan the new grom ryder for Cork bodyboards. A few months ago I was looking for a grom to sponsor due to the lack of young bodyboarders in NZ, and Drew an experienced bodyboarder from Christchurch reached out to me and told me about Dylan. “Yeah, he has got all the basics really solid, and is pushing himself alot. There's only a few groms in Chch. Dylan surfs with his mates who all stand up, so I try to support him as much as possible by sharing gear etc” Thanks Drew and welcome Dylan 😃🤙🏼",
      image: "https://i.ibb.co/HhTzfLN/Dylan.jpg",
      alt: "New team rider Dylan",
      date: "03-04-22",
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
      <Footer />
    </div>
  );
};

export default PostList;

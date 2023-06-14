import React from "react";
import boards from "../components/Boards";
import Card from "../components/Cards";

function Products() {
  return (
    <div className="caption">
      <Card
        title={boards[0].title}
        description={boards[0].description}
        link={boards[0].link}
      />
      <Card
        title={boards[1].title}
        description={boards[1].description}
        link={boards[1].link}
      />
      <Card
        title={boards[2].title}
        description={boards[2].description}
        link={boards[2].link}
      />
    </div>
  );
}

export default Products;

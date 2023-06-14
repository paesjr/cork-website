import React from "react";

function Card(props) {
  return (
    <>
      <div className="card">
        <h1 className="card-title">{props.title}</h1>
        <img className="card-image" alt="Products" src={props.link} />
        <div className="card-body">
          <p>{props.description}</p>
        </div>
      </div>
    </>
  );
}

export default Card;

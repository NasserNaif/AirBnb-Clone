import React from "react";
import OneCard from "./OneCard";

import data from "../data";

function Cards() {
  const Cards = data.map((item) => {
    return <OneCard key={item.id} {...item} />;
  });
  return <div className="container">{Cards}</div>;
}

export default Cards;

// {data.map((c) => {
//   return (
//     <OneCard
//       img={c.coverImg}
//       Rate={c.stats.rating}
//       RatingNumbers={`(${c.stats.reviewCount}) • `}
//       Location={c.location}
//       Title={c.title}
//       Price={c.price}
//       // openSpot={c.openSpots}
//     />
//   );
// })}

// old way

/* <div className="CardDiv">
        <img src={CardIMG} alt="ImageLo" />
        <div className="D--Div">
          <img className="star" src={star} alt="star" />
          <span>5.0 </span>
          <span className="grey">(6) • </span>
          <span className="grey"> USA </span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <strong>From $136</strong> / person
        </p>
      </div> */

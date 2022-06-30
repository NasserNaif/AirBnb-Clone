import React from "react";

function OneCard(props) {
  let BadgeText;
  if (props.openSpots === 0) {
    BadgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    BadgeText = "Online";
  }

  return (
    <div className="CardDiv">
      {BadgeText && <div className="Card--Badge">{BadgeText}</div>}

      <img src={props.coverImg} alt="ImageLo" className="CardImage" />

      <div className="D--Div">
        <img className="star" src="IMG/Star.png" alt="star" />
        <span>{props.stats.rating} </span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>

      <p>{props.title}</p>

      <p>
        <strong>From ${props.price}</strong> / person
      </p>
    </div>
  );
}

export default OneCard;

// {openSpot === 0 ? (
//   <div className="Card--Badge">SOLD OUT</div>
// ) : (
//   <div className="Card--Badge">Available</div>
// )}
// Life Lessons with Katie Zaferes -- From $136  --  / person

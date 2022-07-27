import React, { Component } from "react";
import Star from './Star';

class StarRating extends Component {

  // Initialize a 'rating' state - internally controlled state
state = {
  rating: 0
};

  // Write a function that returns 5 Star components
renderStars = () => {
  let stars = [];
  let maxRating = 5;

  //React doesn't allow for loops in it's render method, so must create the stars in a separate function outside of render.

  for (let i = 0; i < maxRating; i++) {
    stars.push(
      <Star
        key={i}
      />
    );
  }
  return stars;
}

  // Write an event handler that updates the rating state.
  // Pass the function to a Star component via props
  //renders stars into the DOM


  render() {
    return (
      <ul className="course--stars">
        {/* Render the Star components */}
        { this.renderStars() }
      </ul>
    );
  }
}

export default StarRating;
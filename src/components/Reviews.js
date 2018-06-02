import React from "react";

const Reviews = () => (
  <div className="user-reviews">
    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi, totam, itaque officia ex.
      </blockquote>
      <figcaption className="review__user">
        <img
          src="img/avatars/molly.png"
          alt="user 1"
          className="review__photo"
        />
        <div className="review__user-box">
          <p className="review__user-name">Jane Thomas</p>
          <p className="review__user-date">Feb 23rd, 2018</p>
        </div>
        <div className="review__rating">8.8</div>
      </figcaption>
    </figure>
    <figure className="review">
      <blockquote className="review__text">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
        doloremque architecto dicta animi.
      </blockquote>
      <figcaption className="review__user">
        <img
          src="img/avatars/elliot.jpg"
          alt="user 2"
          className="review__photo"
        />
        <div className="review__user-box">
          <p className="review__user-name">Nick Smith</p>
          <p className="review__user-date">Nov 14th, 2017</p>
        </div>
        <div className="review__rating">7.4</div>
      </figcaption>
    </figure>
    <button className="button-inline">
      Show all
      <span>&rarr;</span>
    </button>
  </div>
);

export default Reviews;

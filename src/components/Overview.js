import React from "react";

const Overview = () => (
  <div className="overview">
    <h1 className="overview__heading">The Nai Harn</h1>
    <div className="overview__stars">
      <svg className="overview__icon-star">
        <use xlinkHref="img/sprite.svg#icon-star" />
      </svg>
      <svg className="overview__icon-star">
        <use xlinkHref="img/sprite.svg#icon-star" />
      </svg>
      <svg className="overview__icon-star">
        <use xlinkHref="img/sprite.svg#icon-star" />
      </svg>
      <svg className="overview__icon-star">
        <use xlinkHref="img/sprite.svg#icon-star" />
      </svg>
      <svg className="overview__icon-star">
        <use xlinkHref="img/sprite.svg#icon-star" />
      </svg>
    </div>

    <div className="overview__location">
      <svg className="overview__icon-location">
        <use xlinkHref="img/sprite.svg#icon-location-pin" />
      </svg>
      <button className="button-inline">Phuket, Thailand</button>
    </div>

    <div className="overview__rating">
      <div className="overview__rating-average">8.6</div>
      <div className="overview__rating-count">429 votes</div>
    </div>
  </div>
);

export default Overview;

import React from "react";

const Description = () => (
  <div className="description">
    <p className="paragraph">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi nisi
      dignissimos debitis ratione sapiente saepe. Accusantium cumque, quas, ut
      corporis incidunt deserunt quae architecto voluptate.
    </p>
    <p className="paragraph">
      Accusantium cumque, quas, ut corporis incidunt deserunt quae architecto
      voluptate delectus, inventore iure aliquid aliquam.
    </p>
    <ul className="list">
      <li className="list__item">Close to the beach</li>
      <li className="list__item">Breakfast included</li>
      <li className="list__item">Free airport shuttle</li>
      <li className="list__item">Free wifi in all suites</li>
      <li className="list__item">Air conitioning/heating</li>
      <li className="list__item">Pets allowed</li>
      <li className="list__item">We speak all languages</li>
      <li className="list__item">Pefect for families</li>
    </ul>
    <div className="recommend">
      <p className="recommend__count">
        Elliot and 3 other friends recommend this hotel.
      </p>
      <div className="recommend__friends">
        <img
          src="img/avatars/elliot.jpg"
          alt="friend 1"
          className="recommend__photo"
        />
        <img
          src="img/avatars/jenny.jpg"
          alt="friend 2"
          className="recommend__photo"
        />
        <img
          src="img/avatars/molly.png"
          alt="friend 3"
          className="recommend__photo"
        />
        <img
          src="img/avatars/matthew.png"
          alt="friend 4"
          className="recommend__photo"
        />
      </div>
    </div>
  </div>
);

export default Description;

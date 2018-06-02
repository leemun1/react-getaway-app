import React from "react";

const CallToAction = () => (
  <div className="cta">
    <h2 className="cta__book-now">
      There are currently <strong>14</strong> available rooms for your selected
      dates.
    </h2>
    <button className="button">
      <span className="button__visible">Book now</span>
      <span className="button__invisible">Only 14 rooms left</span>
    </button>
  </div>
);

export default CallToAction;

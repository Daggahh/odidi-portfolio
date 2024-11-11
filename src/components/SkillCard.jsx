import React from "react";

function SkillCard({ skillName }) {
  return (
    <div className="col-6 col-sm-6 mb-5 mb-lg-0 col-md-6 col-lg-3">
      <div className="counter-v1 text-center">
        <span className="number-wrap">
          <span className="number number-counter">0</span>
          <span className="append-text">%</span>
        </span>
        <span className="counter-label">{skillName}</span>
      </div>
    </div>
  );
}

export default SkillCard;

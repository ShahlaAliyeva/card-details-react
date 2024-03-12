import React, { ReactNode } from "react";
import image from "../assets/images/icon-complete.svg";

function Completed({ onSetSubmit }: { onSetSubmit: Function }) {
  return (
    <div className="main__container completed__page">
      <img src={image} alt="complete_img" />
      <p>thank you!</p>
      <span>We've added your card details</span>
      <button onClick={() => onSetSubmit()}>continue</button>
    </div>
  );
}

export default Completed;

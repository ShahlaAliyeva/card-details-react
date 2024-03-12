import React, { ReactNode } from "react";
import image from "../assets/images/icon-complete.svg";

function Completed({ children }: { children: ReactNode }) {
  return (
    <div className="main__container">
      <img src={image} alt="complete_img" />
    </div>
  );
}

export default Completed;

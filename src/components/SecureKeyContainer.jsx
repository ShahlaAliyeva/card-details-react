import React from "react";

function SecureKeyContainer({ children, secNum }) {
  return (
    <label htmlFor="cvc">
      cvc
      {children}
      <span className={secNum ? "no_validate" : "validation"}>
        please write your name
      </span>
    </label>
  );
}

export default SecureKeyContainer;

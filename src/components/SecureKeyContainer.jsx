import React from "react";

function SecureKeyContainer({ children , secNum}) {
  return (
    <label htmlFor="cvc">
      cvc
      {children}
      {secNum ? null : (
        <span className="validation">please write your name</span>
      )}
    </label>
  );
}

export default SecureKeyContainer;

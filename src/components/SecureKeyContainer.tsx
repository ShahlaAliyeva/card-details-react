import React, { ReactNode } from "react";

interface SecureKeyContainerProps {
  children: ReactNode;
  secNum: string;
  isSubmited: boolean;
}

function SecureKeyContainer({ children, secNum, isSubmited }) {
  return (
    <label htmlFor="cvc">
      cvc
      {children}
      <span className={!isSubmited || secNum ? "no_validate" : "validation"}>
        please write your cvc
      </span>
    </label>
  );
}

export default SecureKeyContainer;

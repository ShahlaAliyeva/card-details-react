import React, { ReactNode } from "react";

interface FormProps {
  children: ReactNode;
  onSetSubmit: Function;
}

function Form({ children, onSetSubmit }: FormProps) {
  return (
    <form onSubmit={(e) => onSetSubmit(e)}>
      {children}
      <button>confirm</button>
    </form>
  );
}

export default Form;

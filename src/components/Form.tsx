import React, { ReactNode } from "react";
import { IFormProps } from "../models";


function Form({ children, onSetSubmit }: IFormProps) {
  return (
    <form onSubmit={onSetSubmit}>
      {children}
      <button>submit</button>
    </form>
  );
}

export default Form;

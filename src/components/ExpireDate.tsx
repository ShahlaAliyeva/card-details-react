import React, { ReactNode } from "react";
import { IExpireDateProps } from "../models";


function ExpireDate({ children }: IExpireDateProps) {
  return (
    <div>
      <label htmlFor="expDate">exp. date (mm/yy)</label>
      <div className="date__time__container">{children}</div>
      
    </div>
  );
}

export default ExpireDate;

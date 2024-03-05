import React, { ReactNode } from "react";
import { IExpireDateProps } from "../models";


function ExpireDate({ children, year, month, isSubmited }: IExpireDateProps) {
  return (
    <div>
      <label htmlFor="expDate">exp. date (mm/yy)</label>
      <div className="date__time__container">{children}</div>
      <span
        className={
          !isSubmited || (year && month) ? "no_validate" : "validation"
        }
      >
        please write your expire date
      </span>
    </div>
  );
}

export default ExpireDate;

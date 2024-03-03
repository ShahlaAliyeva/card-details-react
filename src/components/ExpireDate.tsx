import React, { ReactNode } from "react";

interface ExpireDateProps {
  children: ReactNode;
  year: string;
  month: string;
  isSubmited: boolean;
}

function ExpireDate({ children, year, month, isSubmited }: ExpireDateProps) {
  return (
    <label htmlFor="expDate">
      exp. date (mm/yy)
      <div className="date__time__container">{children}</div>
      <span
        className={
          !isSubmited || (year && month) ? "no_validate" : "validation"
        }
      >
        please write your expire date
      </span>
    </label>
  );
}

export default ExpireDate;

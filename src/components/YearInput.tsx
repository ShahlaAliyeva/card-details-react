import React from "react";
import { IYearInputProps } from "../models";

function YearInput({ year, onSetYear, isSubmited, currYear }: IYearInputProps) {
  return (
    <input
      className={!isSubmited || year ? "" : "validation"}
      type="number"
      min={currYear}
      placeholder="yy"
      name="year"
      value={year}
      onChange={(e) => onSetYear(e)}
    />
  );
}

export default YearInput;

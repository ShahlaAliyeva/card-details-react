import React from "react";

interface YearInputProps {
  year: string;
  onSetYear: Function;
  isSubmited: boolean;
  currYear: string;
}

function YearInput({ year, onSetYear, isSubmited, currYear }: YearInputProps) {
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

import React from "react";

interface MonthInputProps {
  month: string;
  onSetMonth: Function;
  isSubmited: boolean;
}

function MonthInput({ month, onSetMonth, isSubmited }: MonthInputProps) {
  return (
    <input
      className={!isSubmited || month ? "" : "validation"}
      type="number"
      placeholder="mm"
      max={12}
      min={1}
      id="expDate"
      name="month"
      value={month}
      onChange={(e) => onSetMonth(e)}
    />
  );
}

export default MonthInput;

import React from "react";
import { IMonthInputProps } from "../models";

function MonthInput({ month, onSetMonth, isSubmited }: IMonthInputProps) {
  return (
    <input
      className={!isSubmited || month ? "" : "validation"}
      type="number"
      placeholder="mm"
      id="expDate"
      name="month"
      value={month}
      onChange={(e) => onSetMonth(e)}
    />
  );
}

export default MonthInput;

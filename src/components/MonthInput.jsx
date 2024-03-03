function MonthInput({ month, onSetMonth, isSubmited }) {
  return (
    <input
      // required
      className={!isSubmited || month ? "" : "validation"}
      type="number"
      placeholder="mm"
      max={12}
      min={1}
      id="expDate"
      name="month"
      value={month}
      onChange={onSetMonth}
    />
  );
}

export default MonthInput;

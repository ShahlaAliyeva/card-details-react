function MonthInput({month, onSetMonth}) {
  return (
    <input
      // required
      className={month ? "" : "validation"}
      type="number"
      placeholder="mm"
      max={12}
      min={1}
      id="expDate"
      name="exp-date"
      value={month < 11 ? `0${month}` : `${month}`}
      onChange={(e) => onSetMonth(Number(e.target.value))}
    />
  );
}


export default MonthInput

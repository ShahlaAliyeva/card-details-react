function YearInput({year, onSetYear, isSubmited, currYear}) {
  return (
    <input
      className={!isSubmited || year ? "" : "validation"}
      type="number"
      min={currYear}
      placeholder="yy"
      name="year"
      value={year}
      onChange={onSetYear}
    />
  );
}

export default YearInput
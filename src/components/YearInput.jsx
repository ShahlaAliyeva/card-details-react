function YearInput({year, onSetYear}) {
  return (
    <input
      // required
      className={year ? "" : "validation"}
      type="number"
      placeholder="yy"
      name="exp-date"
      value={year}
      onChange={(e) => onSetYear(Number(e.target.value))}
    />
  );
}

export default YearInput
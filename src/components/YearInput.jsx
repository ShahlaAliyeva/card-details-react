function YearInput({year, onSetYear, isSubmited}) {
  return (
    <input
      // required
      className={!isSubmited || year ? "" : "validation"}
      type="number"
      placeholder="yy"
      name="exp-date"
      value={year}
      onChange={(e) => onSetYear(Number(e.target.value))}
    />
  );
}

export default YearInput
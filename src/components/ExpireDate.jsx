function ExpireDate({ children, year, month }) {
  return (
    <label htmlFor="expDate">
      exp. date (mm/yy)
      <div className="date__time__container">{children}</div>
      <span className={year && month ? "no_validate" : "validation"}>
        please write your expire date
      </span>
    </label>
  );
}

export default ExpireDate;

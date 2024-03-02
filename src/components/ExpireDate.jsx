function ExpireDate({ children, year, month, isSubmited }) {
  return (
    <label htmlFor="expDate">
      exp. date (mm/yy)
      <div className="date__time__container">{children}</div>
      <span
        className={
          !isSubmited || (year && month) ? "no_validate" : "validation"
        }
      >
        please write your expire date
      </span>
    </label>
  );
}

export default ExpireDate;

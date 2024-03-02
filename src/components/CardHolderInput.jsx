function CardHolderInput({ fullname, onSetName, isSubmited }) {
  return (
    <>
      <label htmlFor="fullName">Cardholder name</label>
      <input
        // required
        className={!isSubmited || fullname ? "" : "validation"}
        value={fullname}
        onChange={onSetName}
        type="text"
        id="fullName"
        placeholder="e. g. Jane Apleseed"
      />
      <span className={!isSubmited || fullname ? "no_validate" : "validation"}>
        please write your name
      </span>
    </>
  );
}

export default CardHolderInput;

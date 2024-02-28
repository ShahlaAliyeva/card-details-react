function CardHolderInput({ fullname, onSetName }) {
  return (
    <>
      <label htmlFor="fullName">Cardholder name</label>
      <input
        // required
        className={fullname ? "" : "validation"}
        value={fullname}
        onChange={onSetName}
        type="text"
        id="fullName"
        placeholder="e. g. Jane Apleseed"
      />
      {fullname ? null : (
        <span className="validation">please write your name</span>
      )}
    </>
  );
}

export default CardHolderInput;

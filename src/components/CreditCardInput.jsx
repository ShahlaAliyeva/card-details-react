import InputMask from "react-input-mask";

function CreditCardInput({ cardNumber, onSetNumber }) {
  return (
    <>
      <label htmlFor="cardNumber">Card number</label>
      <InputMask
        className={cardNumber ? "" : "validation"}
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={onSetNumber}
      />
      {cardNumber ? null : (
        <span className="validation">please write your card number</span>
      )}
    </>
  );
}

export default CreditCardInput;

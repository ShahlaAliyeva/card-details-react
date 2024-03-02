import InputMask from "react-input-mask";

function CreditCardInput({ cardNumber, onSetNumber }) {
  return (
    <>
      <label htmlFor="cardNumber">Card number</label>
      <InputMask
        id="cardNumber"
        className={cardNumber ? "" : "validation"}
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={onSetNumber}
      />

      <span className={cardNumber ? "no_validate" : "validation"}>
        please write your card number
      </span>
    </>
  );
}

export default CreditCardInput;

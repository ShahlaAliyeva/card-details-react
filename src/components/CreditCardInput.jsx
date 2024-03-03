import InputMask from "react-input-mask";

function CreditCardInput({ cardNumber, onSetNumber, isSubmited }) {
  return (
    <>
      <label htmlFor="cardNumber">Card number</label>
      <InputMask
        id="cardNumber"
        name='cardNumber'
        className={!isSubmited || cardNumber ? "" : "validation"}
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        value={cardNumber}
        onChange={onSetNumber}
      />

      <span className={!isSubmited || cardNumber ? "no_validate" : "validation"}>
        please write your card number
      </span>
    </>
  );
}

export default CreditCardInput;

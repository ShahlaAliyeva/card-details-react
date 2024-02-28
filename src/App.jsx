import { useState } from "react";
import InputMask from "react-input-mask";

function App() {
  const [fullname, setFullname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [secNum, setSecNum] = useState("");

  function handleFullname(e) {
    setFullname(e.target.value);
  }

  function handleCardNumber(e) {
    setCardNumber(e.target.value);
  }

  function handleSetMonth(e) {
    setMonth(() => (e <= 12 ? e : ""));
  }

  function handleSetYear(e) {
    setYear(() => (e <= 99 ? e : ""));
  }

  function handleSetSecNum(e) {
    if (e > 1000) return;
    setSecNum(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullname && !cardNumber && !month && !year && !secNum) return;
    setFullname("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setSecNum("");
  }

  return (
    <>
      <Aside
        fullname={fullname}
        cardNumber={cardNumber}
        month={month}
        year={year}
        secNum={secNum}
      />
      <Main
        fullname={fullname}
        onSetName={handleFullname}
        cardNumber={cardNumber}
        onSetNumber={handleCardNumber}
        month={month}
        onSetMonth={handleSetMonth}
        year={year}
        onSetYear={handleSetYear}
        secNum={secNum}
        onSetSecNum={handleSetSecNum}
        onSetSubmit={handleSubmit}
      />
    </>
  );
}

export default App;

function Aside({ fullname, cardNumber, month, year, secNum }) {
  return (
    <aside className="aside">
      <CardFront
        fullname={fullname}
        cardNumber={cardNumber}
        month={month}
        year={year}
      />
      <CardBack secNum={secNum} />
    </aside>
  );
}

function CardFront({ fullname, cardNumber, month, year, secNum }) {
  return (
    <div className="card card__front__container">
      <div className="card__front__logo__container">
        <img src="./images/card-logo.svg" alt="card-logo" />
      </div>

      <div className="card__front__info__container">
        <p className="card__front__nums__container">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </p>
        <div className="user__and__expire__date__container">
          <p>{fullname || "Jane Apleseed"}</p>
          <p>
            {month ? month : "00"}/{year ? year : "00"}
          </p>
        </div>
      </div>
    </div>
  );
}

function CardBack({ secNum }) {
  return (
    <div className="card card__back__container">
      <p className="card_info_cvc">{secNum ? secNum : "000"}</p>
    </div>
  );
}

function Main({
  onSetName,
  fullname,
  cardNumber,
  onSetNumber,
  month,
  onSetMonth,
  onSetYear,
  year,
  secNum,
  onSetSecNum,
  onSetSubmit,
}) {
  return (
    <div className="main__container">
      <Form
        onSetName={onSetName}
        fullname={fullname}
        onSetNumber={onSetNumber}
        cardNumber={cardNumber}
        month={month}
        onSetMonth={onSetMonth}
        onSetYear={onSetYear}
        year={year}
        secNum={secNum}
        onSetSecNum={onSetSecNum}
        onSetSubmit={onSetSubmit}
      />
    </div>
  );
}

function Form({
  onSetName,
  fullname,
  onSetNumber,
  cardNumber,
  onSetMonth,
  month,
  year,
  onSetYear,
  secNum,
  onSetSecNum,
  onSetSubmit,
}) {
  return (
    <form onSubmit={onSetSubmit}>
      <div>
        <label htmlFor="fullName">Cardholder name</label>
        <input
          required
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
      </div>

      <div>
        <label htmlFor="cardNumber">Card number</label>

        <CreditCardInput cardNumber={cardNumber} onSetNumber={onSetNumber} />
      </div>

      <div className="form__card__info">
        <label htmlFor="expDate">
          exp. date (mm/yy)
          <div className="date__time__container">
            <input
              required
              className={month ? "" : "validation"}
              type="number"
              placeholder="mm"
              max={12}
              min={1}
              id="expDate"
              name="exp-date"
              value={month < 11 ? `0${month}` : `${month}`}
              onChange={(e) => onSetMonth(Number(e.target.value))}
            />
            <input
              required
              className={year ? "" : "validation"}
              type="number"
              placeholder="yy"
              name="exp-date"
              value={year}
              onChange={(e) => onSetYear(Number(e.target.value))}
            />
          </div>
          {month && year ? null : (
            <span className="validation">please write your expire date</span>
          )}
        </label>

        <label htmlFor="cvc">
          cvc
          <input
            required
            className={secNum ? "" : "validation"}
            type="number"
            id="cvc"
            value={secNum}
            onChange={(e) => onSetSecNum(Number(e.target.value))}
          />
          {secNum ? null : (
            <span className="validation">please write your name</span>
          )}
        </label>
      </div>

      <button>confirm</button>
    </form>
  );
}

function CreditCardInput({ cardNumber, onSetNumber }) {
  return (
    <>
      <InputMask
        className={cardNumber ? "" : "validation"}
        mask="9999 9999 9999 9999"
        placeholder="0000 0000 0000 0000"
        cardNumber={cardNumber}
        onChange={onSetNumber}
      />
      {cardNumber ? null : (
        <span className="validation">please write your card number</span>
      )}
    </>
  );
}

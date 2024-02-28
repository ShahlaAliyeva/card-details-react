import ExpireDate from "./ExpireDate";
import MonthInput from "./MonthInput";
import SecureKey from "./SecureKey";
import SecureKeyContainer from "./SecureKeyContainer";
import YearInput from "./YearInput";

function CardInfo({ onSetMonth, month, year, onSetYear, secNum, onSetSecNum }) {
  return (
    <>
      <ExpireDate month={month} year={year}>
        <MonthInput month={month} onSetMonth={onSetMonth} />
        <YearInput year={year} onSetYear={onSetYear} />
      </ExpireDate>

      <SecureKeyContainer secNum={secNum}>
        <SecureKey secNum={secNum} onSetSecNum={onSetSecNum} />
      </SecureKeyContainer>
    </>
  );
}

export default CardInfo;

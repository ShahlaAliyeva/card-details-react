import React from "react";
import ExpireDate from "./ExpireDate";
import MonthInput from "./MonthInput";
import SecureKey from "./SecureKey";
import SecureKeyContainer from "./SecureKeyContainer";
import YearInput from "./YearInput";

interface CardInfoProps {
  onSetMonth: Function;
  month: string;
  year: string;
  onSetYear: Function;
  secNum: string;
  onSetSecNum: Function;
  isSubmited: boolean;
  currYear: string;
}

function CardInfo({
  onSetMonth,
  month,
  year,
  onSetYear,
  secNum,
  onSetSecNum,
  isSubmited,
  currYear,
}: CardInfoProps) {
  return (
    <>
      <ExpireDate month={month} year={year} isSubmited={isSubmited}>
        <MonthInput
          month={month}
          onSetMonth={onSetMonth}
          isSubmited={isSubmited}
        />
        <YearInput
          currYear={currYear}
          year={year}
          onSetYear={onSetYear}
          isSubmited={isSubmited}
        />
      </ExpireDate>

      <SecureKeyContainer secNum={secNum} isSubmited={isSubmited}>
        <SecureKey
          secNum={secNum}
          onSetSecNum={onSetSecNum}
          isSubmited={isSubmited}
        />
      </SecureKeyContainer>
    </>
  );
}

export default CardInfo;

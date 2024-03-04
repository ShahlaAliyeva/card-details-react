import React from "react";
import ExpireDate from "./ExpireDate";
import Input from "./Input";

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
    <div className="form__card__info">
      <ExpireDate month={month} year={year} isSubmited={isSubmited}>
        <Input
          inputVal={month}
          setFunc={onSetMonth}
          isSubmited={isSubmited}
          placeholder="mm"
          inputName="month"
          inputType='number'
        />
        <Input
          minVal={currYear}
          inputVal={year}
          setFunc={onSetYear}
          isSubmited={isSubmited}
          placeholder="yy"
          inputName="year"
          inputType='number'
        />
      </ExpireDate>

      <Input
        isSubmited={isSubmited}
        inputVal={secNum}
        setFunc={onSetSecNum}
        labelFor="cvc"
        inputName="secNum"
        labelText="cvc"
        inputType="number"
        placeholder="000"
        errorMessage="please write your cvc"
      />
    
    </div>
  );
}

export default CardInfo;

import React from "react";
import ExpireDate from "./ExpireDate";
import Input from "./Input";
import { ICardInfoProps } from "../models";

function CardInfo({
  currYear,

}: ICardInfoProps) {
  return (
    <div className="form__card__info">
      <ExpireDate month={month} year={year}>
        <Input
          inputVal={month}
          setFunc={onSetMonth}
          placeholder="mm"
          inputName="month"
          inputType="number"
          labelFor="expDate"
          register={register}
          errors={monthError}
          rules={{
            required: "this field is required",
            min: {
              value: 1,
              message: "Write month between 1-12",
            },
            max: {
              value: 12,
              message: "Write month between 1-12",
            },
          }}
        />
        <Input
          minVal={currYear}
          inputVal={year}
          setFunc={onSetYear}
          placeholder="yy"
          inputName="year"
          inputType="number"
          register={register}
          errors={yearError}
          rules={{
            required: "this field is required",
            min: {
              value: Number(currYear),
              message: "Write correct expire date please",
            },
            max: {
              value: 99,
              message: "Write correct expire date please",
            },
          }}
        />
      </ExpireDate>

      <Input
        inputVal={secNum}
        setFunc={onSetSecNum}
        labelFor="cvc"
        inputName="secNum"
        labelText="cvc"
        inputType="number"
        placeholder="000"
        errors={secNumError}
        rules={{
          required: "this field is required",
          min: {
            value: 1,
            message: "Write correct cvc number",
          },
          max: {
            value: 999,
            message: "Write correct cvc number",
          },
          maxLength: {
            value: 3,
            message: "Write correct cvc number",
          },
        }}
      />
    </div>
  );
}

export default CardInfo;

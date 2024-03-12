import React from "react";
import ExpireDate from "./ExpireDate";
import Input from "./Input";
import { ICardInfoProps, IMainPageForm } from "../models";
import { useFormContext } from "react-hook-form";

function CardInfo({
  currYear,

}: ICardInfoProps) {

  const {watch} = useFormContext<IMainPageForm>()
  const [month, year] = watch(['year', 'month'])
  return (
    <div className="form__card__info">
      <ExpireDate month={month} year={year}>
        <Input
          inputName="month"
          placeholder="mm"
          inputType="number"
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
          placeholder="yy"
          inputName="year"
          inputType="number"
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
        inputName="secNum"
        labelText="cvc"
        inputType="number"
        placeholder="000"
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

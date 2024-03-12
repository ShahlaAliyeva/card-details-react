import React from "react";
import ExpireDate from "./ExpireDate";
import Input from "./Input";
import { ICardInfoProps, IMainPageForm } from "../models";
import { useFormContext } from "react-hook-form";

function CardInfo() {
  const { watch } = useFormContext<IMainPageForm>();
  const [month, year] = watch(["year", "month"]);
  return (
    <div className="form__card__info">
      <ExpireDate month={month} year={year}>
        <Input inputName="month" placeholder="mm" inputType="number" />
        <Input inputName="year" placeholder="yy" inputType="number" />
      </ExpireDate>

      <Input
        inputName="secNum"
        labelText="cvc"
        inputType="number"
        placeholder="000"
      />
    </div>
  );
}

export default CardInfo;

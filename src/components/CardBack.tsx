import React from "react";
import { IMainPageForm } from "../models";
import { useFormContext } from "react-hook-form";

function CardBack() {
  const {watch} = useFormContext<IMainPageForm>()

  const secNum = watch('secNum')
  return (
    <div className="card card__back__container">
      <p className="card_info_cvc">
        {secNum && Number(secNum) < 10
          ? `00${secNum}`
          : Number(secNum) >= 10 && Number(secNum) <= 99
          ? `0${secNum}`
          : Number(secNum) >= 100
          ? `${secNum}`
          : "000"}
      </p>
    </div>
  );
}

export default CardBack;

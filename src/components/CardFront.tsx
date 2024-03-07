import React from "react";
import cardLogo from "../assets/images/card-logo.svg";
import { useFormContext } from "react-hook-form";
import { IMainPageForm } from "../models";

function CardFront() {
  const { watch } = useFormContext<IMainPageForm>();

  const [fullname, cardNumber, month, year] = watch([
    "fullname",
    "cardNumber",
    "month",
    "year",
  ]);

  return (
    <div className="card card__front__container">
      <div className="card__front__logo__container">
        <img src={cardLogo} alt="card-logo" />
      </div>

      <div className="card__front__info__container">
        <p className="card__front__nums__container">
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </p>
        <div className="user__and__expire__date__container">
          <p>{fullname || "Jane Apleseed"}</p>
          <p>
            {month && Number(month) < 10
              ? `0${month}`
              : Number(month) >= 10
              ? month
              : "00"}
            /{year ? year : "00"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CardFront;

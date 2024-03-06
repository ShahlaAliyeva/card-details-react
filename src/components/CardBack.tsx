import React from "react";

function CardBack({ secNum }: { secNum: string }) {
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

import React from "react";

function CardBack({ secNum }: { secNum: string }) {
  return (
    <div className="card card__back__container">
      <p className="card_info_cvc">{secNum ? `${secNum}` : "000"}</p>
    </div>
  );
}

export default CardBack;

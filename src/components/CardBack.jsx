import { PropTypes } from "prop-types";

function CardBack({ secNum }) {
  return (
    <div className="card card__back__container">
      <p className="card_info_cvc">{secNum ? `${secNum}` : "000"}</p>
    </div>
  );
}

export default CardBack

CardBack.propTypes = {
  secNum: PropTypes.number
}
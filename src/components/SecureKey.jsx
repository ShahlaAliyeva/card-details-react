import React from "react";

function SecureKey({ secNum, onSetSecNum }) {
  return (
    <input
      // required
      className={secNum ? "" : "validation"}
      type="number"
      id="cvc"
      value={secNum}
      onChange={(e) => onSetSecNum(Number(e.target.value))}
    />
  );
}

export default SecureKey;
// value={
//   secNum && secNum < 10
//     ? `00${secNum}`
//     : secNum && secNum < 100
//     ? `0${secNum}`
//     : secNum
// }

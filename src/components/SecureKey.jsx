import React from "react";

function SecureKey({ secNum, onSetSecNum, isSubmited}) {
  return (
    <input
      name="secNum"
      className={!isSubmited || secNum ? "" : "validation"}
      type="number"
      id="cvc"
      value={secNum}
      onChange={onSetSecNum}
    />
  );
}

export default SecureKey;

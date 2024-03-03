import React from "react";

interface SecureKeyProps {
  secNum: string;
  onSetSecNum: Function;
  isSubmited: boolean;
}
function SecureKey({ secNum, onSetSecNum, isSubmited }: SecureKeyProps) {
  return (
    <input
      name="secNum"
      className={!isSubmited || secNum ? "" : "validation"}
      type="number"
      id="cvc"
      value={secNum}
      onChange={(e) => onSetSecNum(e)}
    />
  );
}

export default SecureKey;

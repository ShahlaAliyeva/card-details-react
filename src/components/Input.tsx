import React from "react";
import InputMask from "react-input-mask";

interface InputProps {
  isSubmited: boolean;
  className: string;
  inputVal: string;
  setFunc: Function;
  labelFor: string;
  inputName: string;
  labelText: string;
  inputType: string;
  placeholder: string;
  isInputMask: boolean;
  mask: string;
  errorMessage: string;
  minVal: string;
}

function Input({
  isSubmited,
  className = "",
  inputVal,
  setFunc,
  labelFor = "",
  inputName,
  labelText = "",
  inputType,
  placeholder = "",
  isInputMask = false,
  mask = "",
  errorMessage,
  minVal = "",
}: InputProps) {
  return (
    <div className={className}>
      {labelText && <label htmlFor={labelFor}>{labelText}</label>}

      {isInputMask ? (
        <InputMask
          id={labelFor}
          name={inputName}
          className={!isSubmited || inputVal ? "" : "validation"}
          mask={mask}
          placeholder={placeholder}
          value={inputVal}
          onChange={(e) => setFunc(e)}
          min={minVal}
        />
      ) : (
        <input
          className={!isSubmited || inputVal ? "" : "validation"}
          name={inputName}
          value={inputVal}
          onChange={(e) => setFunc(e)}
          type={inputType}
          id={labelFor}
          placeholder={placeholder}
        />
      )}

      {errorMessage && (
        <span
          className={!isSubmited || inputVal ? "no_validate" : "validation"}
        >
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default Input;

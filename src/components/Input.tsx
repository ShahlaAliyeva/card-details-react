import React from "react";
import InputMask from "react-input-mask";
import { IInputProps } from "../models";


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
  register
}: IInputProps) {
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
          // {...register(inputVal, { required: true})}
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
          // {...register(inputVal, { required: true})}
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

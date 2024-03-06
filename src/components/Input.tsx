import React from "react";
import InputMask from "react-input-mask";
import { IInputProps } from "../models";

function Input({
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
  register,
  rules,
  errors,
}: IInputProps) {
  // console.log(errors && errors[inputName]);

  return (
    <div className={className}>
      {labelText && <label htmlFor={labelFor}>{labelText}</label>}

      {isInputMask ? (
        <InputMask
          id={labelFor}
          className={errors && errors[inputName] ? "validation" : ""}
          value={inputVal}
          placeholder={placeholder}
          {...register(inputName, rules)}
          onChange={(e) => setFunc(e)}
          mask={mask}
        />
      ) : (
        <input
          id={labelFor}
          className={errors && errors[inputName] ? "validation" : ""}
          value={inputVal}
          placeholder={placeholder}
          {...register(inputName, rules)}
          onChange={(e) => setFunc(e)}
          type={inputType}
        />
      )}

      <span className={errors && errors.message ? "validation" : "no_validate"}>
        {errors && errors.message}{" "}
      </span>
    </div>
  );
}

export default Input;

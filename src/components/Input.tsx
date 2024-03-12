import React from "react";
import InputMask from "react-input-mask";
import { IInputProps } from "../models";
import { useFormContext } from "react-hook-form";

function Input({
  className = "",
  inputName,
  labelText = "",
  inputType,
  placeholder = "",
  isInputMask = false,
  mask = "",
  // valueAsNumber
}: IInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors?.[inputName]?.message;

  return (
    <div className={className}>
      {labelText && <label htmlFor={inputName}>{labelText}</label>}

      {isInputMask ? (
        <InputMask
          id={inputName}
          className={errors && errors[inputName] ? "validation" : ""}
          placeholder={placeholder}
          {...register(inputName)}
          mask={mask}
        />
      ) : (
        <input
          id={inputName}
          className={errors && errors[inputName] ? "validation" : ""}
          placeholder={placeholder}
          {...register(inputName)}
          type={inputType}
        />
      )}

      <span className={errorMessage ? "validation" : "no_validate"}>
        {errorMessage ? `${errorMessage}` : "error message field"}
      </span>
    </div>
  );
}

export default Input;

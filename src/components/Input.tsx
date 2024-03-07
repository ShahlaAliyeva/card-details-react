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
  rules,
}: IInputProps) {
  // console.log(errors && errors[inputName]);
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
          {...register(inputName, rules)}
          mask={mask}
        />
      ) : (
        <input
          id={inputName}
          className={errors && errors[inputName] ? "validation" : ""}
          placeholder={placeholder}
          {...register(inputName, rules)}
          type={inputType}
        />
      )}

      {errorMessage && <span className="validation">{`${errorMessage}`}</span>}
    </div>
  );
}

export default Input;

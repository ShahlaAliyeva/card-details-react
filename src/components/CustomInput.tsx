import React from "react";
import InputMask from "react-input-mask";
import { IInputProps } from "../models";
import { useFormContext } from "react-hook-form";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function CustomInput({
  // className = "",
  inputName,
  labelText = "",
  inputType,
  placeholder = "",
  isInputMask = false,
  mask = "",
  isInvalid,
}: IInputProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors?.[inputName]?.message;

  return (
    <FormControl isInvalid={isInvalid}>
      {labelText && (
        <FormLabel
          textTransform={"uppercase"}
          fontSize={"0.9rem"}
          htmlFor={inputName}
        >
          {labelText}
        </FormLabel>
      )}

      {isInputMask ? (
        <Input
          as={InputMask}
          id={inputName}
          placeholder={placeholder}
          {...register(inputName)}
          mask={mask}
          borderColor={"hsl(278, 94%, 30%)"}
          _focus={{
            borderColor: "hsl(278, 94%, 30%)",
            outline: "none",
            boxShadow: "none",
          }}
          _placeholder={{ color: "hsl(270, 3%, 87%)" }}
          outline={"none"}
        />
      ) : (
        <Input
          id={inputName}
          placeholder={placeholder}
          {...register(inputName)}
          type={inputType}
          borderColor={"hsl(278, 94%, 30%)"}
          _focus={{
            borderColor: "hsl(278, 94%, 30%)",
            outline: "none",
            boxShadow: "none",
          }}
          _placeholder={{ color: "hsl(270, 3%, 87%)" }}
          outline={"none"}
        />
      )}

      <FormErrorMessage>
        {errorMessage ? `${errorMessage}` : ""}
      </FormErrorMessage>
    </FormControl>
  );
}

export default CustomInput;

import React, { ReactNode } from "react";
import { IFormProps } from "../models";
import { Button } from "@chakra-ui/react";

function Form({ children, onSetSubmit, isSubmitting }: IFormProps) {
  return (
    <form
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "1.5rem",
      }}
      onSubmit={onSetSubmit}
    >
      {children}
      <Button
        type="submit"
        textTransform={"uppercase"}
        bg="hsl(278, 68%, 11%)"
        color="#fff"
        _hover={{ bg: "hsl(278, 94%, 30%)" }}
        isLoading={isSubmitting}
      >
        submit
      </Button>
    </form>
  );
}

export default Form;

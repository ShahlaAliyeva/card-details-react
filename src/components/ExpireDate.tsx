import React, { ReactNode } from "react";
import { IExpireDateProps } from "../models";
import { Box, FormLabel } from "@chakra-ui/react";

function ExpireDate({ children }: IExpireDateProps) {
  return (
    <Box>
      <FormLabel textTransform={"uppercase"} fontSize={"0.9rem"}>
        exp. date (mm/yy)
      </FormLabel>
      <Box display={'flex'} gap={'1rem'} >{children}</Box>
    </Box>
  );
}

export default ExpireDate;

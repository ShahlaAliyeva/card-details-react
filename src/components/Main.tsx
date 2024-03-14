import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return (
    <Box
      width={"50%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"2rem"}
    >
      {children}
    </Box>
  );
}

export default Main;

import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

function Main({ children }: { children: ReactNode }) {
  return (
    <Box
      width={{base: "100%", sm:'80%' ,lg: "40%"}}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={{base: "2rem", md:'4rem'}}
      margin={{base:'2rem auto', lg:0}}
    >
      {children}
    </Box>
  );
}

export default Main;

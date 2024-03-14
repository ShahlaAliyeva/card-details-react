import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import bgImg from "../assets/images/bg-main-desktop.png";

function SideBar({ children }: { children: ReactNode }) {
  return (
    <Box
      width={{ base: "100%", lg: "30%" }}
      height={{ base: "30vh", sm:'40vh', lg: "100vh" }}
      backgroundImage={`url(${bgImg})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      position={"relative"}
    >
      <Box
        w={{base: '100vw',sm:"25rem"}}
        h={{base: '100%' ,sm: 'fit-content'}}
        position={"absolute"}
        left={{ base: "50%", sm:'50%', lg: "50%" }}
        top={{base: "50%" }}
        transform={{ base: "translate(-50%, -50%)", lg: "translateY(-50%)" }}
        display={"flex"}
        flexDirection={{base: 'column-reverse',lg: "column"}}
        gap={{lg: "1.3rem"}}
      >
        {children}
      </Box>
    </Box>
  );
}

export default SideBar;

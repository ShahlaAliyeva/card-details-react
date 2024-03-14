import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";
import bgImg from "../assets/images/bg-main-desktop.png";

function SideBar({ children }: { children: ReactNode }) {
  return (
    <Box
      width={"30%"}
      height={"100vh"}
      backgroundImage={`url(${bgImg})`}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      position={"relative"}
    >
      <Box
        w={"25rem"}
        position={"absolute"}
        left={"50%"}
        top={"50%"}
        transform={"translateY(-50%)"}
        display={"flex"}
        flexDirection={"column"}
        gap={"1.3rem"}
      >
        {children}
      </Box>
    </Box>
  );
}

export default SideBar;

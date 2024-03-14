import React from "react";
import { IMainPageForm } from "../models";
import { useFormContext } from "react-hook-form";
import { Box, Text } from "@chakra-ui/react";
import bgImg from "../assets/images/bg-card-back.png";

function CardBack() {
  const { watch } = useFormContext<IMainPageForm>();

  const secNum = watch("secNum");
  return (
    <Box
      w={"20rem"}
      h={"11rem"}
      borderRadius={"0.5rem"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.2)"}
      backgroundImage={bgImg}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignSelf={"flex-end"}
      color={"#fff"}
    >
      <Text textAlign={"right"} marginRight={"2.4rem"} fontSize={"0.8rem"}>
        {secNum && Number(secNum) < 10
          ? `00${secNum}`
          : Number(secNum) >= 10 && Number(secNum) <= 99
          ? `0${secNum}`
          : Number(secNum) >= 100
          ? `${secNum}`
          : "000"}
      </Text>
    </Box>
  );
}

export default CardBack;

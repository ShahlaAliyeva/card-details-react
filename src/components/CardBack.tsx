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
      w={{ base: "15rem", sm: "21rem", lg: "22rem" }}
      h={{ base: "9rem", sm: "11rem", lg: "12.3rem" }}
      borderRadius={"0.5rem"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.2)"}
      backgroundImage={bgImg}
      backgroundSize={"cover"}
      backgroundRepeat={"no-repeat"}
      backgroundPosition={"center"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignSelf={"flex-end"}
      color={"#fff"}
      position={{ base: "absolute", sm: "static" }}
      top={{ base: "10%", sm: "0" }}
      right={{ base: "10%", sm: "0" }}
      fontSize={{ base: ".9rem", md: "1rem" }}
    >
      <Text
        textAlign={"right"}
        marginRight={{base: '1.9rem',md:"2.4rem"}}
        fontSize={{ base: ".7rem", md: "0.8rem" }}
      >
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

import React from "react";
import cardLogo from "../assets/images/card-logo.svg";
import bgImg from "../assets/images/bg-card-front.png";
import { useFormContext } from "react-hook-form";
import { IMainPageForm } from "../models";
import { Box, Image, Text } from "@chakra-ui/react";

function CardFront() {
  const { watch } = useFormContext<IMainPageForm>();

  const [fullname, cardNumber, month, year] = watch([
    "fullname",
    "cardNumber",
    "month",
    "year",
  ]);

  return (
    <Box
      w={"20rem"}
      h={"11rem"}
      borderRadius={"0.5rem"}
      boxShadow={"0px 0px 20px 0px rgba(0, 0, 0, 0.2)"}
      backgroundImage={bgImg}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"space-between"}
      color={"#fff"}
      padding={"1rem"}
    >
      <Box>
        <Image src={cardLogo} alt="card-logo" />
      </Box>

      <Box display={"flex"} flexDirection={"column"} gap={"1.2rem"}>
        <Text
          display={"flex"}
          gap={"0.8rem"}
          fontSize={"1.1rem"}
          justifyContent={"center"}
          alignItems={"center"}
          letterSpacing={"2px"}
        >
          {cardNumber ? cardNumber : "0000 0000 0000 0000"}
        </Text>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"space-between"}
          fontSize={"0.8rem"}
          textTransform={"capitalize"}
        >
          <Text>{fullname || "Jane Apleseed"}</Text>
          <Text>
            {month && Number(month) < 10
              ? `0${month}`
              : Number(month) >= 10
              ? month
              : "00"}
            /{year ? year : "00"}
          </Text>
        </Box>
      </Box>
    </Box>
  );
}

export default CardFront;

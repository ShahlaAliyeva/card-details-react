import React, { ReactNode } from "react";
import image from "../assets/images/icon-complete.svg";
import { Box, Button, Image, Text } from "@chakra-ui/react";

function Completed({ onSetSubmit }: { onSetSubmit: Function }) {
  return (
    <Box
      width={"40%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      padding={"3rem"}
      gap={"1.4rem"}
    >
      <Image src={image} alt="complete_img" />
      <Text
        textTransform={"uppercase"}
        fontSize={"1.6rem"}
        color={"hsl(278, 68%, 11%)"}
        letterSpacing={"7px"}
        fontWeight={"600"}
      >
        thank you!
      </Text>
      <Text fontSize={"1.1rem"} color={"hsl(279, 6%, 55%)"}>
        We've added your card details
      </Text>
      <Button
        type="submit"
        textTransform={"uppercase"}
        bg="hsl(278, 68%, 11%)"
        color="#fff"
        _hover={{ bg: "hsl(278, 94%, 30%)" }}
        onClick={() => onSetSubmit()}
        w={"100%"}
      >
        continue
      </Button>
    </Box>
  );
}

export default Completed;

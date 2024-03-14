import React from "react";
import ExpireDate from "./ExpireDate";
import { ICardInfoProps, IMainPageForm } from "../models";
import { useFormContext } from "react-hook-form";
import CustomInput from "./CustomInput";
import { Box } from "@chakra-ui/react";

function CardInfo({ errors }: { errors: any }) {
  const { watch } = useFormContext<IMainPageForm>();
  const [month, year] = watch(["year", "month"]);
  return (
    <Box
      display={"flex"}
      gap={"1rem"}
      justifyContent={"space-between"}
      flexWrap={"nowrap"}
      alignItems={"baseline"}
    >
      <ExpireDate month={month} year={year}>
        <CustomInput
          inputName="month"
          placeholder="mm"
          inputType="number"
          isInvalid={errors?.month}
        />
        <CustomInput
          inputName="year"
          placeholder="yy"
          inputType="number"
          isInvalid={errors?.year}
        />
      </ExpireDate>

      <CustomInput
        inputName="secNum"
        labelText="cvc"
        inputType="number"
        placeholder="000"
        isInvalid={errors?.secNum}
      />
    </Box>
  );
}

export default CardInfo;

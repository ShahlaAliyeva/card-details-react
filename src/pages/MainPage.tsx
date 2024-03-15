import React, { useState } from "react";

import CardInfo from "../components/CardInfo";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import CustomInput from "../components/CustomInput";

import CardDetailSchema from "../schema";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Completed from "../components/Completed";
import { Box } from "@chakra-ui/react";



type CardDetailSchemaType = z.infer<typeof CardDetailSchema>;

function MainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit: SubmitHandler<CardDetailSchemaType> = () => {
    return new Promise((resolve: any) => {
      setTimeout(() => {
        resolve();
        setIsSubmitted(true);
      }, 2000);
    });
  };

  const formMethods = useForm<CardDetailSchemaType>({
    resolver: zodResolver(CardDetailSchema),
  });

  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = formMethods;


  function handleSubmitted() {
    setIsSubmitted(false);
    reset();
  }

  return (
    <FormProvider {...formMethods}>
      <Box
        display={{lg: "flex"}}
        height={"100vh"}
        width={"100%"}
        justifyContent={"space-between"}
        alignItems={"center"}
      >
        <SideBar>
          <CardFront />
          <CardBack />
        </SideBar>

        {!isSubmitted ? (
          <Main>
            <Form
              isSubmitting={isSubmitting}
              onSetSubmit={handleSubmit(onSubmit)}
            >
              <CustomInput
                inputName="fullname"
                labelText="Cardholder name"
                inputType="text"
                placeholder="e. g. Jane Apleseed"
                isInvalid={errors.fullname}
              />

              <CustomInput
                isInputMask={true}
                inputName="cardNumber"
                labelText="card number"
                mask="9999 9999 9999 9999"
                placeholder="0000 0000 0000 0000"
                isInvalid={errors.cardNumber}
              />

              <CardInfo errors={errors} />
            </Form>
          </Main>
        ) : (
          <Completed onSetSubmit={handleSubmitted} />
        )}
      </Box>
    </FormProvider>
  );
}

export default MainPage;

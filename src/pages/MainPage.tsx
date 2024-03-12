import React, { useState } from "react";

import CardInfo from "../components/CardInfo";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import Input from "../components/Input";

import { IMainPageForm } from "../models";

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Completed from "../components/Completed";

const currYear = new Date().getFullYear().toString().substring(2);

const CardDetailSchema = z.object({
  fullname: z
    .string()
    .regex(/([A-Za-z]){1,}\s([A-Za-z]){1,}/, "This field is required")
    .min(6, "Write your name correctly"),
  cardNumber: z
    .string()
    .regex(
      /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
      "Please write your card number correctly"
    ),
  month: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val)), {
      message: "This field is required",
    })
    .transform((month) => parseInt(month))
    .pipe(
      z
        .number()
        .min(1, "Write month between 1-12")
        .max(12, "Write month between 1-12")
    ),
  year: z
    .string()
    .refine((val) => !Number.isNaN(parseInt(val)), {
      message: "This field is required",
    })
    .transform((year) => parseInt(year))
    .pipe(
      z
        .number()
        .min(Number(currYear), "Write correct year")
        .max(99, "Write correct year")
    ),
  secNum: z
    .string()
    .min(1, "Write correct cvc number")
    .max(3, "Write correct cvc number"),
});
type CardDetailSchemaType = z.infer<typeof CardDetailSchema>;

function MainPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const onSubmit: SubmitHandler<CardDetailSchemaType> = () =>
    setIsSubmitted(true);

  const formMethods = useForm<CardDetailSchemaType>({
    resolver: zodResolver(CardDetailSchema),
  });

  const { handleSubmit, reset } = formMethods;

  function handleSubmitted() {
    setIsSubmitted(false);
    reset();
  }

  return (
    <FormProvider {...formMethods}>
      <SideBar>
        <CardFront />
        <CardBack />
      </SideBar>

      {!isSubmitted ? (
        <Main>
          <Form onSetSubmit={handleSubmit(onSubmit)}>
            <Input
              inputName="fullname"
              labelText="Cardholder name"
              inputType="text"
              placeholder="e. g. Jane Apleseed"
            />

            <Input
              isInputMask={true}
              inputName="cardNumber"
              labelText="card number"
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
            />

            <CardInfo />
          </Form>
        </Main>
      ) : (
        <Completed onSetSubmit={handleSubmitted} />
      )}
    </FormProvider>
  );
}

export default MainPage;

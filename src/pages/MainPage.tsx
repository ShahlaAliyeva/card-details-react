import React, { useState } from "react";

import CardInfo from "../components/CardInfo";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import Main from "../components/Main";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import Input from "../components/Input";
import InputMask from "react-input-mask";

import { IMainPageForm } from "../models";

import {useForm, SubmitHandler, FormProvider} from "react-hook-form";
import GenericInput from "../components/GenericInput";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

const currYear = new Date().getFullYear().toString().substring(2);
function MainPage() {
  const formMethods = useForm<IMainPageForm>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = formMethods
  const onSubmit: SubmitHandler<IMainPageForm> = (data) => console.log(data);

  return (
    <FormProvider {...formMethods}>
      <SideBar>
        <CardFront />
        <CardBack />
      </SideBar>
      <Main>
        <form
          onSubmit={handleSubmit(onSubmit)}
        >
          <GenericInput
              label={'Cardholder name'}
              name={'fullname'}
              rules={{
                required: "This field is required",
                pattern: {
                  value: /([A-Za-z]){1,}\s([A-Za-z]){1,}/,
                  message: "Please write your name correctly",
                },
                minLength: {
                  value: 6,
                  message: "Write your name correctly",
                },
              }}
          />

          <GenericInput
              label={'exp month'}
              name={'month'}
              rules={{
                required: "this field is required",
                min: {
                  value: 1,
                  message: "Write month between 1-12",
                },
                max: {
                  value: 12,
                  message: "Write month between 1-12",
                },
              }}
          />

          <GenericInput
              label={'exp year'}
              name={'year'}
              rules={{
                  required: "this field is required",
                  min: {
                      value: Number(currYear),
                      message: "Write correct expire date please",
                  },
                  max: {
                      value: 99,
                      message: "Write correct expire date please",
                  },
              }}
          />

          <GenericInput
              label={'cvc'}
              name={'cvc'}
              rules={{
                  required: "this field is required",
                  min: {
                      value: 1,
                      message: "Write correct cvc number",
                  },
                  max: {
                      value: 999,
                      message: "Write correct cvc number",
                  },
                  maxLength: {
                      value: 3,
                      message: "Write correct cvc number",
                  },
              }}
          />
          <button>submit</button>
        </form>
      </Main>
    </FormProvider>
  );
}

export default MainPage;

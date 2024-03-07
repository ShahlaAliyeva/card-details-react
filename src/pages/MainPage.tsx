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

import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

const currYear = new Date().getFullYear().toString().substring(2);
function MainPage() {
  const onSubmit = (data: any) => {
    console.log(data);
  };

  const formMethods = useForm<IMainPageForm>();

  const { handleSubmit } = formMethods;

  return (
    <FormProvider {...formMethods}>
      <SideBar>
        <CardFront />
        <CardBack />
      </SideBar>
      <Main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputName="fullname"
            labelText="Cardholder name"
            inputType="text"
            placeholder="e. g. Jane Apleseed"
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

          <Input
            isInputMask={true}
            inputName="cardNumber"
            labelText="card number"
            mask="9999 9999 9999 9999"
            placeholder="0000 0000 0000 0000"
            rules={{
              required: "This field is required",
              pattern: {
                value: /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
                message: "Please write your card number correctly",
              },
            }}
          />

          <CardInfo
            month={"month"}
            year={"year"}
            // isSubmited={isSubmited}
            currYear={currYear}
            register={register}
            
          />

          <button>submit</button>
        </form>
      </Main>
    </FormProvider>
  );
}

export default MainPage;

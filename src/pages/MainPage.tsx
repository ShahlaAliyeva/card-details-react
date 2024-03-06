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

import { useForm, SubmitHandler } from "react-hook-form";
// import { zodResolver } from "@hookform/resolvers/zod";
// import * as z from "zod";

const currYear = new Date().getFullYear().toString().substring(2);
function MainPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<IMainPageForm>();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const formDefaultInputs: IMainPageForm = {
    fullname: "",
    cardNumber: "",
    month: "",
    year: "",
    secNum: "",
  };

  const [form, setForm] = useState(formDefaultInputs);

  function onChange(e: any) {
    setForm({ ...form, [e.target.name]: e.target.value });
    watch(e.target.name);
  }

  return (
    <>
      <SideBar>
        <CardFront
          fullname={form.fullname}
          cardNumber={form.cardNumber}
          month={form.month}
          year={form.year}
        />
        <CardBack secNum={form.secNum} />
      </SideBar>
      <Main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            inputVal={form.fullname}
            setFunc={onChange}
            labelFor="fullname"
            inputName="fullname"
            labelText="Cardholder name"
            inputType="text"
            placeholder="e. g. Jane Apleseed"
            register={register}
            errors={errors.fullname}
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
            inputVal={form.cardNumber}
            setFunc={onChange}
            labelFor="cardNumber"
            inputName="cardNumber"
            labelText="card number"
            mask="9999 9999 9999 9999"
            placeholder="0000 0000 0000 0000"
            register={register}
            errors={errors.cardNumber}
            rules={{
              required: "This field is required",
              pattern: {
                value: /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
                message: "Please write your card number correctly",
              },
            }}
          />

          {/* <CardInfo
            month={form.month}
            year={form.year}
            onSetMonth={onChange}
            onSetYear={onChange}
            secNum={form.secNum}
            onSetSecNum={onChange}
            // isSubmited={isSubmited}
            currYear={currYear}
            register={register}
            monthError={errors.month}
            yearError={errors.year}
            secNumError={errors.secNum}
            
          /> */}

          <button>submit</button>
        </form>
      </Main>
    </>
  );
}

export default MainPage;

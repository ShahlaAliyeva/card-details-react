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
  const onSubmit: SubmitHandler<IMainPageForm> = (data) => console.log(data);

  const formDefaultInputs: IMainPageForm = {
    fullname: "",
    cardNumber: "",
    month: "",
    year: "",
    secNum: "",
  };

  const [form, setForm] = useState(formDefaultInputs);

  function onChange(e) {
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
        {/* <Form onSetSubmit={()=>handleSubmit(onSubmit)}>
          <Input
            isSubmited={isSubmited}
            inputVal={form.fullname}
            setFunc={onChange}
            labelFor="fullname"
            inputName="fullname"
            labelText="Cardholder name"
            inputType="text"
            placeholder="e. g. Jane Apleseed"
            errorMessage="please write your name"
            register={register}
          />

          <Input
            isInputMask={true}
            inputVal={form.cardNumber}
            setFunc={onChange}
            isSubmited={isSubmited}
            labelFor="cardNumber"
            inputName="cardNumber"
            labelText="card number"
            mask="9999 9999 9999 9999"
            placeholder="0000 0000 0000 0000"
            errorMessage="please write your card number"
            register={register}
          />

          <CardInfo
            month={form.month}
            year={form.year}
            onSetMonth={onChange}
            onSetYear={onChange}
            secNum={form.secNum}
            onSetSecNum={onChange}
            isSubmited={isSubmited}
            currYear={currYear}
          />
        </Form> */}

        <form
          onSubmit={handleSubmit((data) => {
            console.log(data);
          })}
        >
          <div>
            <label htmlFor="">Cardholder name</label>
            <input
              type="text"
              value={form.fullname}
              {...register("fullname", {
                required: "This field is required",
                pattern: {
                  value: /([A-Za-z]){1,}\s([A-Za-z]){1,}/,
                  message: "Please write your name correctly",
                },
                minLength: {
                  value: 6,
                  message: "Write your name correctly",
                },
              })}
              placeholder="e. g. Jane Apleseed"
              onChange={onChange}
            />

            <span
              className={
                !errors.fullname?.message ? "no_validate" : "validation"
              }
            >
              {errors.fullname?.message}
            </span>
          </div>
          <div>
            <label htmlFor="">card number</label>
            <InputMask
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              value={form.cardNumber}
              {...register("cardNumber", {
                required: "This field is required",
                pattern: {
                  value: /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/,
                  message: "Please write your card number correctly",
                },
              })}
              onChange={onChange}
            />

            <span
              className={
                !errors.cardNumber?.message ? "no_validate" : "validation"
              }
            >
              {errors.cardNumber?.message}
            </span>
          </div>
          <div className="form__card__info">
            <label htmlFor="expDate">
              exp. date (mm/yy)
              <div className="date__time__container">
                <input
                  type="number"
                  placeholder="mm"
                  value={form.month}
                  {...register("month", {
                    required: "this field is required",
                    min: {
                      value: 1,
                      message: "Write month between 1-12",
                    },
                    max: {
                      value: 12,
                      message: "Write month between 1-12",
                    },
                  })}
                  onChange={onChange}
                />
                <input
                  type="number"
                  placeholder="yy"
                  value={form.year}
                  {...register("year", {
                    required: "this field is required",
                    min: {
                      value: Number(currYear),
                      message: "Write correct expire date please",
                    },
                    max: {
                      value: 99,
                      message: "Write correct expire date please",
                    },
                  })}
                  onChange={onChange}
                />
              </div>
              <span
                className={
                  !errors.month?.message && !errors.year?.message
                    ? "no_validate"
                    : "validation"
                }
              >
                {errors.month?.message || errors.year?.message}
              </span>
            </label>

            <label htmlFor="cvc">
              cvc
              <input
                type="number"
                id="cvc"
                placeholder="000"
                value={form.secNum}
                {...register("secNum", {
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
                })}
                onChange={onChange}
              />
              <span
                className={
                  !errors.secNum?.message ? "no_validate" : "validation"
                }
              >
                {errors.secNum?.message}
              </span>
            </label>
          </div>
          <button>submit</button>
        </form>
      </Main>
    </>
  );
}

export default MainPage;

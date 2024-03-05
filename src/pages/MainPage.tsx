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
  const { register, handleSubmit, watch } = useForm<IMainPageForm>();
  // const onSubmit: SubmitHandler<IMainPageForm> = (data) => console.log(data);
  // console.log(watch("fullname"));

  const [isSubmited, setIsSubmitted] = useState(false);

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
    //   if (e.target.name === "month") {
    //     setForm({
    //       ...form,
    //       [e.target.name]:
    //         Number(e.target.value) <= 12 && e.target.value
    //           ? Number(e.target.value)
    //           : "",
    //     });
    //   }

    //   if (e.target.name === "year") {
    //     setForm({
    //       ...form,
    //       [e.target.name]:
    //         Number(e.target.value) <= 99 && e.target.value
    //           ? Number(e.target.value)
    //           : "",
    //     });
    //   }

    //   if (e.target.name === "secNum") {
    //     setForm({
    //       ...form,
    //       [e.target.name]:
    //         Number(e.target.value) <= 999 && e.target.value
    //           ? Number(e.target.value)
    //           : "",
    //     });
    //   }
  }

  // function handleSubmit(e) {
  //   const { fullname, cardNumber, month, year, secNum } = form;
  //   e.preventDefault();
  //   setIsSubmitted(true);
  //   if (!fullname || !cardNumber || !month || !year || !secNum) return;

  //   setForm(formDefaultInputs);
  //   setIsSubmitted(false);
  // }

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

        <form onSubmit={handleSubmit((data) => console.log(data))}>
          <div>
            <label htmlFor="">Cardholder name</label>
            <input
              type="text"
              value={form.fullname}
              {...register("fullname", {
                required: "This field is required",
                minLength: {
                  value: 3,
                  message: "En az 3 herf olmalidir!",
                },
              })}
              placeholder="e. g. Jane Apleseed"
              onChange={onChange}
            />
          </div>
          <div>
            <label htmlFor="">card number</label>
            <InputMask
              mask="9999 9999 9999 9999"
              placeholder="0000 0000 0000 0000"
              value={form.cardNumber}
              {...register("cardNumber", { required: true, minLength: 19 })}
              onChange={onChange}
            />
            {/* {error.message && (
              <span
                className={
                  !isSubmited || inputVal ? "no_validate" : "validation"
                }
              >
                {errorMessage}
              </span>
            )} */}
          </div>
          <div className="form__card__info">
            <label htmlFor="expDate">
              exp. date (mm/yy)
              <div className="date__time__container">
                <input
                  type="number"
                  placeholder="mm"
                  value={form.month}
                  {...register("month", { required: true, min: 1, max: 12 })}
                  onChange={onChange}
                />
                <input
                  type="number"
                  placeholder="yy"
                  value={form.year}
                  {...register("year", {
                    required: true,
                    min: Number(currYear),
                    max: 99,
                  })}
                  onChange={onChange}
                />
              </div>
            </label>

            <label htmlFor="cvc">
              cvc
              <input type="number" id="cvc" />
            </label>
          </div>
          <button>submit</button>
        </form>
      </Main>
    </>
  );
}

export default MainPage;

import React, { useState } from "react";
import CardInfo from "../components/CardInfo";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import Main from "../components/Main";

import SideBar from "../components/SideBar";
import Form from "../components/Form";
import Input from "../components/Input";

const currYear = new Date().getFullYear().toString().substring(2);

function MainPage() {
  const [isSubmited, setIsSubmitted] = useState(false);

  const formDefaultInputs = {
    fullname: "",
    cardNumber: "",
    month: "",
    year: "",
    secNum: "",
  };

  const [form, setForm] = useState(formDefaultInputs);

  function onChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });

    if (e.target.name === "month") {
      setForm({
        ...form,
        [e.target.name]:
          Number(e.target.value) <= 12 && e.target.value
            ? Number(e.target.value)
            : "",
      });
    }

    if (e.target.name === "year") {
      setForm({
        ...form,
        [e.target.name]:
          Number(e.target.value) <= 99 && e.target.value
            ? Number(e.target.value)
            : "",
      });
    }

    if (e.target.name === "secNum") {
      setForm({
        ...form,
        [e.target.name]:
          Number(e.target.value) <= 999 && e.target.value
            ? Number(e.target.value)
            : "",
      });
    }
  }

  function handleSubmit(e) {
    const { fullname, cardNumber, month, year, secNum } = form;
    e.preventDefault();
    setIsSubmitted(true);
    if (!fullname || !cardNumber || !month || !year || !secNum) return;

    setForm(formDefaultInputs);
    setIsSubmitted(false);
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
        <Form onSetSubmit={handleSubmit}>
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
          />

          <Input
            isInputMask={true}
            inputVal={form.cardNumber}
            setFunc={onChange}
            isSubmited={isSubmited}
            labelFor="cardNumber"
            inputName="cardNumber"
            labelText='card number'
            mask='9999 9999 9999 9999'
            placeholder="0000 0000 0000 0000"
            errorMessage="please write your card number"
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
        </Form>
      </Main>
    </>
  );
}

export default MainPage;

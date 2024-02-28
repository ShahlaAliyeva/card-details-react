import { useState } from "react";
import CreditCardInput from "../components/CreditCardInput";
import CardHolderInput from "../components/CardHolderInput";
import CardInfo from "../components/CardInfo";
import CardBack from "../components/CardBack";
import CardFront from "../components/CardFront";
import Main from "../components/Main";

import React from "react";
import SideBar from "../components/SideBar";
import Form from "../components/Form";
import InputLayout from "../components/InputLayout";

function MainPage() {
  const [fullname, setFullname] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [secNum, setSecNum] = useState("");
  const [isSubmited, setIsSubmitted] = useState(false);

  function handleFullname(e) {
    setFullname(e.target.value);
  }

  function handleCardNumber(e) {
    setCardNumber(e.target.value);
  }

  function handleSetMonth(e) {
    setMonth(() => (e <= 12 ? e : ""));
  }

  function handleSetYear(e) {
    setYear(() => (e <= 99 ? e : ""));
  }

  function handleSetSecNum(e) {
    if (e > 1000) return;
    setSecNum(e);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!fullname || !cardNumber || !month || !year || !secNum) return;
    setFullname("");
    setCardNumber("");
    setMonth("");
    setYear("");
    setSecNum("");
  }

  return (
    <>
      <SideBar>
        <CardFront
          fullname={fullname}
          cardNumber={cardNumber}
          month={month}
          year={year}
        />
        <CardBack secNum={secNum} />
      </SideBar>
      <Main>
        <Form onSetSubmit={handleSubmit}>
          <InputLayout>
            <CardHolderInput onSetName={handleFullname} fullname={fullname} />
          </InputLayout>

          <InputLayout>
            <CreditCardInput
              cardNumber={cardNumber}
              onSetNumber={handleCardNumber}
            />
          </InputLayout>

          <InputLayout className="form__card__info">
            <CardInfo
              month={month}
              year={year}
              onSetMonth={handleSetMonth}
              onSetYear={handleSetYear}
              secNum={secNum}
              onSetSecNum={handleSetSecNum}
            />
          </InputLayout>
        </Form>
      </Main>
    </>
  );
}

export default MainPage;

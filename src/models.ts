import React, { ReactNode } from "react";

export interface IMainPageForm {
  fullname: string;
  cardNumber: string;
  month: string;
  year: string;
  secNum: string;
}
export interface ICardInfoProps {
  onSetMonth: Function;
  month: string;
  year: string;
  onSetYear: Function;
  secNum: string;
  onSetSecNum: Function;
  isSubmited: boolean;
  currYear: string;
}

export interface IExpireDateProps {
  children: ReactNode;
  year: string;
  month: string;
  isSubmited: boolean;
}

export interface IFormProps {
  children: ReactNode;
  onSetSubmit: Function;
}

export interface IInputProps {
  isSubmited: boolean;
  className: string;
  inputVal: string;
  setFunc: Function;
  labelFor: string;
  inputName: string;
  labelText: string;
  inputType: string;
  placeholder: string;
  isInputMask: boolean;
  mask: string;
  errorMessage: string;
  minVal: string;
  register: object
}

export interface IMonthInputProps {
  month: string;
  onSetMonth: Function;
  isSubmited: boolean;
}

export interface IYearInputProps {
    year: string;
    onSetYear: Function;
    isSubmited: boolean;
    currYear: string;
  }
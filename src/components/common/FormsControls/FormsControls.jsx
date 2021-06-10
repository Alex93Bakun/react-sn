import React from "react";

import s from "./FormsControls.module.scss";
import { Field } from "redux-form";

const FormsControl = ({ input, meta: { touched, error }, children }) => {
  const hasError = touched && error;
  return (
    <div className={s.formControl + " " + (hasError ? s.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      {" "}
      <textarea {...input} {...restProps} />
    </FormsControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormsControl {...props}>
      {" "}
      <input {...input} {...restProps} />
    </FormsControl>
  );
};

export const createField = (
  type,
  name,
  placeholder,
  component,
  validators,
  text = ""
) => (
  <div>
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      component={component}
      validate={validators}
    />
    {text}
  </div>
);

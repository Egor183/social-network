import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";

const FormControl = ({ meta: { error, touched }, children }) => {
  const hasError = error && touched;
  return (
    <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const createField = (type, placeholder, name, component, validator, text, props = {}) => {
  return (
    <div>
      <Field type={type} placeholder={placeholder} name={name} component={component} validate={validator} /> {text}
    </div>
  );
};

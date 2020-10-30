import React from "react";
import styles from "./FormsControls.module.css";
import { Field } from "redux-form";
import cx from "classnames";

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
  const { input, meta, child, label, id, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input id={id} {...input} {...restProps} />
      <label htmlFor={id}>{label}</label>
    </FormControl>
  );
};

export const createField = (type, placeholder, name, component, validator, text, id, props = {}) => {
  if (component === Input) {
    if (type === "checkbox") {
      return (
        <Field
          type={type}
          placeholder={placeholder}
          name={name}
          component={component}
          validate={validator}
          className={"inputStyleCheckbox"}
          id={id}
          label={text}
        />
      );
    }
    return (
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validator}
        className={styles.inputStyle}
      />
    );
  }

  return (
    <div>
      <Field
        type={type}
        placeholder={placeholder}
        name={name}
        component={component}
        validate={validator}
        className={cx(styles.inputStyle, styles.textArea)}
      />
      {text}
    </div>
  );
};

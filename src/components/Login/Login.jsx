import React from "react";

import { Field, reduxForm } from "redux-form";
import { authAPI } from "../../API/api";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";

const Login = () => {
  const onSubmit = (formData) => {
    authAPI.setAuthMe(formData);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          type="text"
          placeholder="Login"
          name="login"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type="text"
          placeholder="Password"
          name="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          type="checkbox"
          component={Input}
          validate={[required]}
          name="remember me"
        />{" "}
        remember me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default Login;

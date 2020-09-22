import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { Redirect } from "react-router-dom";
import styles from "../Common/FormsControls/FormsControls.module.css";

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  };
  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

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
          type="password"
          placeholder="Password"
          name="password"
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field type="checkbox" component={Input} name="remember me" /> remember
        me
      </div>
      {props.error && (
        <div className={styles.formSummaryError}>{props.error}</div>
      )}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default connect(mapStateToProps, { login, withAuthRedirect })(Login);

import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { Redirect } from "react-router-dom";
import styles from "../Common/FormsControls/FormsControls.module.css";

const Login = ({ login, isAuth, meId, captcha }) => {
  const onSubmit = (formData) => {
    login(formData);
  };
  if (isAuth) {
    return <Redirect to={"/profile/" + meId} />;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("text", "Login", "email", Input, [required])}
      {createField("password", "Password", "password", Input, [required])}
      {createField("checkbox", null, "rememberMe", Input, null, "remember me")}
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
      {captcha && (
        <div>
          <img src={captcha} alt="captcha" />
          {createField("text", "captcha", "captcha", Input, [required])}
        </div>
      )}
    </form>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    meId: state.auth.userId,
    captcha: state.auth.captcha,
  };
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

export default connect(mapStateToProps, { login, withAuthRedirect })(Login);

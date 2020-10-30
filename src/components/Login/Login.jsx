import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { Redirect } from "react-router-dom";
import styles from "../Common/FormsControls/FormsControls.module.css";
import s from "../Login/Login.module.css";
import btnSt from "./../Profile/MyPosts/MyPosts.module.css";
import cx from "classnames";
import "../Common/FormsControls/checkboxStyledSquare.css";

const Login = ({ login, isAuth, meId, captcha }) => {
  const onSubmit = (formData) => {
    login(formData);
  };
  if (isAuth) {
    return <Redirect to={"/profile/" + meId} />;
  }
  return (
    <div className={s.loginContainer}>
      <h1 className={s.loginName}>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </div>
  );
};

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={s.loginBlock}>
        <div>{createField("text", "Login", "email", Input, [required])}</div>
        <div>{createField("password", "Password", "password", Input, [required])}</div>
        <div>{createField("checkbox", null, "rememberMe", Input, null, "remember me", "remember")}</div>
        <div className={s.buttonWrapper}>
          <button className={cx(btnSt.commonButton)}>Login</button>
        </div>
        <div>{error && <p className={styles.formSummaryError}>{error}</p>}</div>
      </div>
      {captcha && (
        <div>
          <img src={captcha} alt="captcha" className={s.captchaImg} />
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

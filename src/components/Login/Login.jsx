import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input } from "../Common/FormsControls/FormsControls";
import { required } from "../../utils/validators/validator";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer";
import withAuthRedirect from "../../HOC/withAuthRedirect";
import { Redirect } from "react-router-dom";
import { ColumnBlockStyled, SummaryErrorStyled } from "../../styledComponents/Login";
import { InputFileStyledBlue } from "../../styledComponents/ProfileInfo";

const Login = ({ login, isAuth, meId, captcha }) => {
  const onSubmit = (formData) => {
    login(formData);
  };
  if (isAuth) {
    return <Redirect to={"/profile/" + meId} />;
  }
  return (
    <ColumnBlockStyled className="LoginForm">
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captcha={captcha} />
    </ColumnBlockStyled>
  );
};

const LoginForm = ({ handleSubmit, error, captcha }) => {
  return (
    <ColumnBlockStyled as="form" onSubmit={handleSubmit}>
      <div>
        {createField("text", "Login", "email", Input, [required], null, 170)}
        {createField("password", "Password", "password", Input, [required], null, 170)}
        {createField("checkbox", null, "rememberMe", Input, null, "remember me", 20)}
        {error && <SummaryErrorStyled>{error}</SummaryErrorStyled>}
      </div>

      <InputFileStyledBlue as="button" width={100}>
        Login
      </InputFileStyledBlue>

      {captcha && (
        <div>
          <img src={captcha} alt="captcha" />
          {createField("text", "captcha", "captcha", Input, [required])}
        </div>
      )}
    </ColumnBlockStyled>
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

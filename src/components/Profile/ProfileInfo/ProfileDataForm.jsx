import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validator";

import { FieldContainerStyled, FormSummaryError, InputFileStyledBlue } from "../../../styledComponents/ProfileInfo";

const ProfileData = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <FieldContainerStyled>
        <b>Full name:</b>
        {createField("text", "fullName", "fullName", Input, [required], null, 180)}
      </FieldContainerStyled>

      <FieldContainerStyled style={{ display: "flex" }}>
        <b style={{ marginRight: "10px" }}>Looking for a job:</b>
        {createField("checkbox", "lookingForAJob", "lookingForAJob", Input, null, null, 20)}
      </FieldContainerStyled>

      <FieldContainerStyled>
        <b>Professional skills:</b>
        {createField(null, "lookingForAJobDescription", "lookingForAJobDescription", Textarea, [required])}
      </FieldContainerStyled>

      <FieldContainerStyled>
        <b>About me:</b>
        {createField(null, "aboutMe", "aboutMe", Textarea, [required])}
      </FieldContainerStyled>

      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <FieldContainerStyled key={key} className={"contactsFormsContainer"}>
              <b style={{ width: "100px" }}>{key}</b>{" "}
              {createField("text", `${key}`, `contacts[${key}]`, Input, null, null, 180)}
            </FieldContainerStyled>
          );
        })}
      </div>
      {error && <FormSummaryError>{error}</FormSummaryError>}
      <div>
        <InputFileStyledBlue as="button">Save</InputFileStyledBlue>
      </div>
    </form>
  );
};

const ProfileDataForm = reduxForm({
  form: "profileData",
})(ProfileData);

export default ProfileDataForm;

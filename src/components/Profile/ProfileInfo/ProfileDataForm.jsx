import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validator";
import styles from "./ProfileInfo.module.css";

const ProfileData = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <b>Full name:</b>
        {createField("text", "fullName", "fullName", Input, [required])}
      </div>

      <div>
        <b>Looking for a job:</b>
        {createField("checkbox", "lookingForAJob", "lookingForAJob", Input)}
      </div>

      <div>
        <b>Professional skills:</b>
        {createField(null, "lookingForAJobDescription", "lookingForAJobDescription", Textarea, [required])}
      </div>

      <div>
        <b>About me:</b>
        {createField(null, "aboutMe", "aboutMe", Textarea, [required])}
      </div>

      <div>
        <b>Contacts:</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contactsFormsContainer}>
              <b className={styles.contactFormName}>{key}</b> {createField("text", `${key}`, `contacts[${key}]`, Input)}
            </div>
          );
        })}
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Save</button>
      </div>
    </form>
  );
};

const ProfileDataForm = reduxForm({
  form: "profileData",
})(ProfileData);

export default ProfileDataForm;

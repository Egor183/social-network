import React from "react";
import { reduxForm } from "redux-form";
import { createField, Input, Textarea } from "../../Common/FormsControls/FormsControls";
import { required } from "../../../utils/validators/validator";
import styles from "./ProfileInfo.module.css";
import s from "../MyPosts/MyPosts.module.css";
import "../../Common/FormsControls/checkboxStyledSquare.css";
import cx from "classnames";

const ProfileData = ({ handleSubmit, profile, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className={styles.inputWrapper}>
        <span className={styles.input}>Full name:</span>
        {createField("text", "fullName", "fullName", Input, [required])}
      </div>

      <div className={styles.checkbox}>
        <span className={styles.status}>Looking for a job:</span>
        <div className={styles.checkboxWrapper}>
          {createField("checkbox", "lookingForAJob", "lookingForAJob", Input, null, null, "looking")}
        </div>
      </div>

      <div className={styles.textareaWrapper}>
        <span className={cx(styles.input, styles.profScills)}>Professional skills:</span>
        {createField(null, "lookingForAJobDescription", "lookingForAJobDescription", Textarea, [required])}
      </div>

      <div className={styles.textareaWrapper}>
        <span className={styles.input}>About me:</span>
        {createField(null, "aboutMe", "aboutMe", Textarea, [required])}
      </div>

      <div>
        <span className={styles.input}>Contacts:</span>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={styles.contactsFormsContainer}>
              <span className={styles.contactFormName}>{key}</span>{" "}
              {createField("text", `${key}`, `contacts[${key}]`, Input)}
            </div>
          );
        })}
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button className={s.commonButton}>Save</button>
      </div>
    </form>
  );
};

const ProfileDataForm = reduxForm({
  form: "profileData",
})(ProfileData);

export default ProfileDataForm;

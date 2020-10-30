import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import styles from "./ProfileInfo.module.css";
import s from "./../../Common/FormsControls/FormsControls.module.css";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    let value = e.currentTarget.value;
    setStatus(value);
  };

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  return (
    <div className={styles.statusContainer}>
      <span className={props.editMode ? styles.input : styles.status}>Status:</span>

      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "your statue could be here"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status !== null ? status : "your status..."}
            className={s.inputStyle}
          />
        </div>
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;

import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { CategoryNameStyled, FieldContainerStyled } from "../../../styledComponents/ProfileInfo";

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
    <FieldContainerStyled className="status">
      <CategoryNameStyled  >Status:</CategoryNameStyled>
      {!editMode && (
        <div>
          <span onDoubleClick={activateEditMode}>{props.status || "your status could be here"}</span>
        </div>
      )}
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status !== null ? status : "your status..."}
          />
        </div>
      )}
    </FieldContainerStyled>
  );
};

export default ProfileStatusWithHooks;

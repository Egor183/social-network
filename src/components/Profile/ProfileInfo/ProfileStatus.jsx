import React from "react";
import s from "./ProfileInfo.module.css";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status,
  };

  activateEditMode = () => {
    this.setState({ editMode: true });
  };

  diactivateEditMode = () => {
    this.setState({ editMode: false });
    this.props.updateStatus(this.state.status);
    console.log(1111);
  };

  onStatusChange = (e) => {
    let value = e.currentTarget.value;
    this.setState({ status: value });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.status !== this.props.status) {
      this.setState({ status: this.props.status });
    }
  }

  render() {
    console.log("return");
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={this.activateEditMode}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus="true"
              value={this.state.status}
              onBlur={this.diactivateEditMode}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;

import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { Item, NavbarContainer, Link, Logout } from "../../styledComponents/Navbar";
import { logout } from "../../redux/auth-reducer";

class Navbar extends React.Component {
  render() {
    return (
      <NavbarContainer>
        <Item>
          <Link to={"/profile/" + this.props.meId}>Profile</Link>
        </Item>
        <Item>
          <Link to="/dialogs"> Messages</Link>
        </Item>
        <Item>
          <Link to="/news"> News</Link>
        </Item>
        <Item>
          <Link to="/users"> Users</Link>
        </Item>
        <Item>
          <Link to="/music"> Music</Link>
        </Item>
        <Item>
          <Link to="/settings">Settings</Link>
        </Item>
        <Item>
          <Link to="/friends">Friends</Link>
        </Item>

        {this.props.isAuth && <Logout onClick={this.props.logout}>Logout</Logout>}
      </NavbarContainer>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    meId: state.auth.userId,
    isAuth: state.auth.isAuth,
    userId: state.profilePage.userId,
  };
};

export default compose(connect(mapStateToProps, { logout }))(Navbar);

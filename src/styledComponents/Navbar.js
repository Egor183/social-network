import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavbarContainer = styled.header`
  grid-column: 1 / 2;
  padding: 20px;
  grid-row: 1/3;
  background-color: white;
  border-right: 1px solid #e0e0e0;
`;

export const Item = styled.div`
  margin-bottom: 10px;
  border-left: 2px solid transparent;
  &:hover {
    border-left: 2px solid #7f7f7f;
  }
`;

export const Logout = styled.button`
  color: red;
  border: none;
  background: transparent;
  outline: none;
  margin-left: 5px;
  margin-top: 50px;
  font-weight: bold;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
    "Droid Sans", "Helvetica Neue", sans-serif;
  font-size: 16px;
  &:hover {
    cursor: pointer;
  }
`;

const activeClassName = "nav-item-active";

export const Login = styled(NavLink)`
  color: blue;
  text-decoration: none;
  font-weight: bold;
`;

export const Link = styled(Login).attrs({
  activeClassName,
})((props) => ({
  color: `#b3b3b3`,
  marginLeft: `5px`,
  ["&." + props.activeClassName]: {
    color: `#7f7f7f`,
  },
}));

import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { initializeApp } from "./redux/app-reducer";
import Preloader from "./components/Common/Preaolader/Preloader";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import SuspenseHOC from "./HOC/Suspense";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={SuspenseHOC(DialogsContainer)} />
          <Route path="/users" render={() => <UsersContainer />} />
          <Route path="/profile/:userId?" render={SuspenseHOC(ProfileContainer)} />
          <Route path="/login" render={SuspenseHOC(Login)} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
  };
};

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {
    initializeApp,
  })
)(App);

let MainApp = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </HashRouter>
  );
};

export default MainApp;

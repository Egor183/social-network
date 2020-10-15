import React from "react";
import Navbar from "./components/Navbar/Navbar";
import "./App.css";
import { Route, Switch } from "react-router-dom";
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
import { BrowserRouter } from "react-router-dom";
import SuspenseHOC from "./HOC/Suspense";
import { Redirect } from "react-router-dom";

// import ProfileContainer from "./components/Profile/ProfileContainer";
// import DialogsContainer from "./components/Dialogs/DialogsContainer";
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer"));
const ProfileContainer = React.lazy(() => import("./components/Profile/ProfileContainer"));

class App extends React.Component {
  catchAllUnhandledErrors = (e) => {
    e.promise.catch(() => {
      let error = `${e.reason}`;
      if (error.includes("403")) {
        alert("Error: error sending data to the server, the action is similar");
      } else if (error.includes("503")) {
        alert("Error: service temporarily unavailable ");
      } else if (error.includes("404")) {
        alert("Error: not found");
      }
      // setTimeout(() => console.clear(), 1000);
    });
  };

  componentDidMount() {
    this.props.initializeApp();
    window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  componentWillUnmount() {
    window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
  }

  render() {
    if (!this.props.initialized) return <Preloader />;
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />

        <div className="app-wrapper-content">
          <Switch>
            <Route exact path="/social-network" render={() => <Redirect to={`/profile/${this.props.meId}`} />} />
            <Route path="/dialogs" render={SuspenseHOC(DialogsContainer)} />
            <Route path="/users" render={() => <UsersContainer />} />
            <Route path="/profile/:userId?" render={SuspenseHOC(ProfileContainer)} />
            <Route path="/login" render={SuspenseHOC(Login)} />
            <Route path="*" render={() => <div>404 NOT FOUND</div>} />
          </Switch>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized,
    meId: state.auth.userId,
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
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;

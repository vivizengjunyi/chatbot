import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "../components/Header";
import PageHome from "../components/PageHome";
import BotPressPage from "../components/Chatbot";
import Footer from "../components/Footer";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import { getAccessToken, getLoginUserId } from "../localstorage";
import { getUserAction, setAccessTokenAction } from "../store/actions";
import { GuardedRoute, GuardProvider } from "react-router-guards";
import ReactLoading from "react-loading";
import NotFound from "./NotFound";

export default function AppRouter() {
  const toastEl = useRef(null);
  const error = useSelector((state) => state.error);
  const dispatch = useDispatch();
  const requireLogin = (to, from, next) => {
    const accessToken = getAccessToken();
    if (to.meta.auth) {
      if (accessToken) {
        next();
      }
      next.redirect("/signin");
    } else {
      next();
    }
  };
  useEffect(() => {
    if (error) {
      const toast = new window.bootstrap.Toast(toastEl.current);
      toast.show();
    }
  }, [error]);
  useEffect(() => {
    const loginUserId = getLoginUserId();
    const accessToken = getAccessToken();
    if (loginUserId && accessToken) {
      dispatch(getUserAction({ email: loginUserId }, accessToken));
      dispatch(setAccessTokenAction(accessToken));
    } else {
      if (window.location.pathname !== "/signin") {
        window.location.href = "/signin";
      }
    }
  }, []);
  return (
    <Router>
      <div
        className="toast-container position-absolute p-3 top-0 start-50 translate-middle-x"
        id="toastPlacement"
        data-original-classname="toast-container position-absolute p-3"
      >
        <div className="toast fade" ref={toastEl}>
          <div className="toast-body">{error && error.message}</div>
        </div>
      </div>
      <div className="wrapper">
        <Header />
        <GuardProvider
          guards={[requireLogin]}
          loading={ReactLoading}
          error={NotFound}
        >
          <Switch>
            <GuardedRoute path="/signin" exact component={SignIn} />
            <GuardedRoute path="/signup" exact component={SignUp} />
            <GuardedRoute
              path="/"
              exact
              component={PageHome}
              meta={{ auth: true }}
            />
            <GuardedRoute
              path="/botpress"
              exact
              component={BotPressPage}
              meta={{ auth: true }}
            />
            <GuardedRoute path="*" component={NotFound} />
          </Switch>
        </GuardProvider>
        <Footer />
      </div>
    </Router>
  );
}

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { setCurrentUserAction } from "../../store/actions";
import "./style.css";
import { removeAccessToken, removeLoginUserId } from "../../localstorage";

function App() {
  const currentUser = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  const logout = () => {
    dispatch(setCurrentUserAction(null));
    removeLoginUserId();
    removeAccessToken();
    history.push("/");
  };
  return (
    <div className="container-fluid">
      <header className="d-flex flex-wrap justify-content-center align-items-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
          <span className="fs-4">Luna</span>
        </a>
        <ul className="nav nav-pills align-items-center">
          <li className="nav-item"><Link to="/" className="nav-link" aria-current="page">Home</Link></li>
          {
            currentUser ? [
              <li key="welcome"
                  className="nav-item ml-3 mr-3">&nbsp;welcome, {currentUser.first_name || currentUser.email}&nbsp;</li>,
              <li key="Log out" className="nav-item"><a href="/" className="nav-link" onClick={logout}>Log out</a></li>
            ] : [
              <li key="Admin" className="nav-item"><Link to="/" className="nav-link">Admin</Link></li>,
              location.pathname == "/signup" ?
                <li key="Log In" className="nav-item"><Link to="/signin" className="nav-link">Log In</Link></li>
                :
                <li key="Sign Up" className="nav-item"><Link to="/signup" className="nav-link">Sign Up</Link></li>
            ]
          }
        </ul>
      </header>
    </div>
  );
}

export default App;
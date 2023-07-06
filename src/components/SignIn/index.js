import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { setErrorAction, signInAction } from "../../store/actions";
import "./style.css";

export default function SignIn() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const usernameRef = useRef(null);
    const history = useHistory();
    const currentUser = useSelector(state => state.currentUser);
    useEffect(() => {
        if (currentUser) {
            history.push("/");
        }
    }, [currentUser, history]);
    const signIn = async () => {
        if (username && password ) {
            const user = {
                username,
                password,
            }
            dispatch(signInAction(user));
        } else {
            dispatch(setErrorAction('Please enter valid username and password'));
        }
    }

    return (
        <div className="form-signin col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <div className="p-3 w-100">
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input className="form-control w-100" id="floatingInput" placeholder="Username" ref={usernameRef}
                           value={username} onChange={e => setUsername(e.target.value)} />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control w-100" id="floatingPassword" placeholder="Password"
                           value={password} onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>

                <div className="checkbox my-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <div className="form-floating inline">
                    <button className="w-50 btn btn-lg btn-primary" onClick={signIn}>Sign in</button>
                    <Link to="/signup" className="w-50 btn btn-lg btn-signup">
                        Sign Up
                    </Link>
                </div>
            </div>
        </div>
    )
}
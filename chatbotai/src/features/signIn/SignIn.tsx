import React, { useState, useEffect, useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { signInUsername } from "./SignInSlice";
import { setError } from "./../../AppSlice";
import styles from "./Counter.module.css";

export default function SignIn() {
  const [username, setUsername] = React.useState<
    string | number | readonly string[] | undefined
  >("");
  const [password, setPassword] = React.useState<
    string | number | readonly string[] | undefined
  >("");
  const dispatch = useAppDispatch();
  const usernameRef = useRef(null);
  const currentUsername = useAppSelector(
    (state) => state.signInReducer.username
  );
  useEffect(() => {
    if (currentUsername) {
      window.location.href = "/";
    }
  }, [currentUsername]);
  const signIn = async () => {
    if (username && password) {
      const user = {
        username,
        password,
      };
      dispatch(signInUsername(user.username as string));
      window.location.href = "/";
    } else {
      dispatch(setError("Please enter valid username and password"));
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-row">
            <div className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 md:shrink-0 lg:w-5/12 xl:w-5/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="sign in"
              />
            </div>
          <form className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-8/12 md:shrink-0 lg:w-5/12 xl:w-5/12 drop-shadow-md">
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="email"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputEmail2"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label
                htmlFor="exampleInputEmail2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Username
              </label>
            </div>
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleInputPassword2"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label
                htmlFor="exampleInputPassword2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>
            <div className="mb-6 float-right">
              <Link
                to="#!"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Forgot password?
              </Link>
            </div>
            <button
              type="submit"
              className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] inline-block w-full rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-[#0ea5e9] hover:text-[#f1f5f9] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-[#0ea5e9] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
              data-te-ripple-init
              data-te-ripple-color="light"
              onClick={signIn}
            >
              Sign in
            </button>
            <p className="mt-6 text-center text-neutral-800 dark:text-neutral-200">
              Not a member?
              <Link
                to="/signup"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Register
              </Link>
            </p>
          </form>
        </div>
      </div>
  );
}

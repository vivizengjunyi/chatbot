import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from "react-router-dom";
import axios from 'axios'
import './style.css';
// import { getUsers, setUser } from '../../localstorage';
import { setErrorAction, signUpAction } from '../../store/actions';

export default function SignUp() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const [password, setPassword] = useState('');
    const [language, setLanguage] = useState('en');
    const [languages, setLanguages] = useState([]);
    const dispatch = useDispatch();
    const emailRef = useRef(null);
    const history = useHistory();
    const currentUser = useSelector(state => state.currentUser);
    useEffect(() => {
        if (currentUser) {
            history.push('/');
        }
    }, [currentUser, history]);
    useEffect(() => {
        const locales = async () => {
            const res = await axios.get('/api/v1/locales');
            setLanguages(res.data);
        };
        try {
            locales();
        } catch (e) {
            dispatch(setErrorAction("API error: Failed to retrieve locales."));
        }
    }, []);
    const createUser = async () => {
        if (username && email && password && emailRef.current.validity.valid) {
            const user = {
                username,
                email,
                first_name,
                last_name,
                password,
                locale_code: language
            }
            dispatch(signUpAction(user));
        } else {
            dispatch(setErrorAction('Please enter valid email and password'));
        }
    }

    const languagesList = () => {
        return languages.map((lang) => {
            return <option key={lang.code} value={lang.code}>{lang.name}</option>
        });
    }

    return (
        <div className="form-signin col-12 col-sm-8 offset-sm-2 col-md-6 offset-md-3">
            <div className="p-3 w-100">
                <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
                <div className="form-floating d-inline-flex w-100">
                    <div className="form-floating me-2 w-100">
                        <input type="text" className="form-control w-100" id="floatingInput2" value={first_name} onChange={e => setFirst_name(e.target.value)} placeholder="First name" />
                    <label htmlFor="floatingInput2">First Name:</label>
                    </div>
                    <div className="form-floating w-100">
                        <input type="text" className="form-control w-100" id="floatingInput3" value={last_name} onChange={e => setLast_name(e.target.value)} placeholder="Last name" />
                    <label htmlFor="floatingInput3">Last Name:</label>
                    </div>
                </div>
                <div className="form-floating">
                    <input type="text" className="form-control w-100" id="floatingInput1" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" />
                    <label htmlFor="floatingInput1">Username:</label>
                </div>
                <div className="form-floating">
                    <input type="email" ref={emailRef} value={email} onChange={e => setEmail(e.target.value)} className="form-control w-100" id="floatingInput4" placeholder="name@example.com" />
                    <label htmlFor="floatingInput4">Email address:</label>
                </div>
                <div className="form-floating">
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control w-100" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password:</label>
                </div>
                {languages.length > 0 ? (
                    <div className="form-floating d-inline-flex w-100 align-items-center">
                        <label id="floatingLabel6">Select user language:</label>
                        <select className="form-select py-0" id="floatingSelect6" value={language} onChange={e => setLanguage(e.target.value)}>
                            {languagesList()}
                        </select>
                    </div>) : <></>
                }
                <div className="form-floating inline">
                    <button className="w-50 btn btn-lg btn-primary" onClick={createUser}>Sign up</button>
                    <Link to="/signin" className="w-50 btn btn-lg btn-signup">
                        Sign In
                    </Link>
                </div>
            </div>
        </div>
    )
}

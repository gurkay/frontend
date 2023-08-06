import { useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";

import useAuth from '../hooks/useAuth';
import axios from "../api/axios";
import { getUsers } from "../redux/features/login/loginServiceSlice";

const LOGIN_URL = '/api/login';

const Login = () => {
    const { setAuth } = useAuth();

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');

    const { loading, users } = useSelector((state) => state.loginService);

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(getUsers());

    }, []);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(user, pwd);
        try {
            const data = { "email": user, "password": pwd }
            const response = await axios.post(LOGIN_URL, data).then()

            if (!response.data.token) {
                return;
            }
            const accessToken = response?.data?.token;
            const findUser = users.find((userEmail) => {
                console.log(userEmail.email);
                return (userEmail.email === user);
            });
            const roles = findUser.role;
            console.log("user: " + user);
            console.log("pwd: " + pwd);
            console.log("roles: " + roles);
            console.log("accessToken: " + accessToken);

            setAuth({ user, pwd, roles, accessToken });
            setUser('');
            setPwd('');
            // setSuccess(true);
            navigate(from, { replace: true });
        } catch (error) {
            if (!error?.response) {
                setErrMsg('No Server Response')
            } else if (error.response?.status === 400) {
                setErrMsg('Missing username or password');
            } else if (error.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            errRef.current.focus();
        }
    }

    return (

        <section>
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    type='text'
                    id='username'
                    ref={userRef}
                    autoComplete='off'
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                />
                <label htmlFor="password">Password:</label>
                <input
                    type='password'
                    id='password'
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need an Acconunt? <br />
                <span className="line"><a href="#">Sing Up</a></span>
            </p>
        </section>

    );
}

export default Login;
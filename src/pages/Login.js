import React, {useState} from "react";
import {Redirect} from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForms';
import axios from 'axios';
import { useAuth } from "../context/auth";

function Login(props) {
    //console.log(props.location.state);
    const referer = props.location.state.referer.pathname || '/';
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { authTokens, setAuthTokens } = useAuth();

    const [isLoggedIn, setLoggedIn] = useState(authTokens ? true : false);
    const [isError, setIsError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    function postLogin() {
        //console.log(email, password);
        axios.post("http://localhost:4200/login", {
            email,
            password
        }).then(result => {
            //console.log(result);
            if (result.status === 200) {
                // console.log(result.data);
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                setErrorMessage("Error!")
                setIsError(true);
            }
        }).catch(e => {
            //("hisssss" + Object.getOwnPropertyNames(e));
            //console.log(e.response);
            let res = e.response;
            if (res.status === 401) {
                setErrorMessage("The username or password provided were incorrect!");
            } else {
                setErrorMessage(e.message);
            }
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to={referer} />;
    }

    return (
        <Card>
            <Logo src='img/logo.jpg' />
            <Form>
                <Input type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                <Input type="password" placeholder="password" value={password} onChange={e => setPassword(e.target.value)} />
                <Button onClick={postLogin}>Sign In</Button>
            </Form>
            <Link to="/signup">Don't have an account?</Link>
                { isError &&<Error> {errorMessage} </Error> }
        </Card>
    );
}

export default Login;
import React, {useState, Redirect} from "react";
import { Link } from 'react-router-dom';
import { Card, Logo, Form, Input, Button, Error } from '../components/AuthForms';
import axios from 'axios';
import { useAuth } from "../context/auth";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setAuthTokens } = useAuth();

    const [isLoggedIn, setLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);


    function postLogin() {
        console.log(email, password);
        axios.post("http://localhost:4200/login", {
            email,
            password
        }).then(result => {
            console.log(result.status);
            console.log("hi");
            if (result.status === 200) {
                setAuthTokens(result.data);
                setLoggedIn(true);
            } else {
                console.log("hia");
                setIsError(true);
            }
        }).catch(e => {
            console.log("hi");
            setIsError(true);
        });
    }

    if (isLoggedIn) {
        return <Redirect to="/" />;
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
            { isError &&<Error>The username or password provided were incorrect!</Error> }
        </Card>
    );
}

export default Login;
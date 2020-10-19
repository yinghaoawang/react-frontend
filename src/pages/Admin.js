import React from 'react';
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/auth";

export default function Admin(props) {
    const { setAuthTokens } = useAuth();

    const logOut = () => {
        setAuthTokens();
    }

    return (
        <>
            <h1>Admin</h1>
            <Button onClick={logOut}>Logout</Button>
        </>
    );
}

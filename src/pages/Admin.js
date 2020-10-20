import React from 'react';
import { Button } from "../components/AuthForms";
import { useAuth } from "../context/AuthContext";

export default function Admin() {
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

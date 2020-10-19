import React from 'react';
import {Route, Redirect} from 'react-router';
import { useAuth } from "./context/auth";

export default function PrivateRoute({component: Component, ...rest}) {
    const {authTokens} = useAuth();
    // console.log(rest);
    return(
        <>
            <Route {...rest} render={
                (props) => authTokens ? (
                    <Component {...props} />
                ) : (
                    <Redirect to={{pathname: "/login", state: {referer: props.location}}} />
                )
            }/>
        </>
    );
}
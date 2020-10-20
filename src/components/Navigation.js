import React from "react";
import {Link} from "react-router-dom";

import {useCart} from "../context/CartContext";
import {useAuth} from "../context/AuthContext";

export default function Navigation() {
    const {cart} = useCart();
    const {isLoggedIn, isAdmin, isAdminOrUser} = useAuth();
    console.log(isLoggedIn);

    return (
        <ul>
            <li>
                <Link to="/">Home Page</Link>
            </li>
            {!isLoggedIn() && <li><Link to="/login">Login</Link></li>}
            {!isLoggedIn() && <li><Link to="/signup">Sign Up</Link></li>}
            {!isLoggedIn() && <li><Link to="/admin">Admin Page</Link></li>}
            {isLoggedIn() && <li><Link to="/cart">Cart <span>{cart.length}</span></Link></li>}
            <li>
                <Link to="/products">Products</Link>
            </li>

        </ul>
    );
}
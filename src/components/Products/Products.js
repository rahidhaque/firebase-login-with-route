import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';


const auth = getAuth(app);
const Products = () => {
    const [user] = useAuthState(auth);
    return (
        <div>
            <h5>Product is browsed by: </h5>
            <span>{user ? user.displayName : "No one is currently browsing"}</span>
        </div>
    );
};

export default Products;
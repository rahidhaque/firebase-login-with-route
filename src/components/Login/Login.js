import { getAuth } from 'firebase/auth';
import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../firebase.init';
const auth = getAuth(app);
const Login = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: "20px" }}>
                <button onClick={() => signInWithGoogle()}>Google Sign In</button>
            </div>
            <form>
                <input type="email" placeholder='write email' name="" id="email" />
                <br />
                <input type="password" placeholder='write password' name="" id="password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div >
    );
};

export default Login; 
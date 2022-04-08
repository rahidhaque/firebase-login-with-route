import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const { signInWithGoogle } = useFirebase();
    return (
        <div>
            <h3>Please Login</h3>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign In</button>
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

export default Login; <h3>Please Login</h3>
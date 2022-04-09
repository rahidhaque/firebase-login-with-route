import React from 'react';

const Register = () => {
    return (
        <div>
            <h3>Please Register Now!</h3>
            <form>
                <input type="text" placeholder='your name' name="" id="name" />
                <br />
                <input type="email" placeholder='write email' name="" id="email" />
                <br />
                <input type="password" placeholder='write password' name="" id="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;
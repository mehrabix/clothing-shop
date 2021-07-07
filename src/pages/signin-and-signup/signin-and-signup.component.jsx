import React from 'react';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';
import './signin-and-signup.component.scss';

const SignInAndSignup = () => (
    <div className="Sign-in-And-Sign-up">

        <SignIn />
        <SignUp />

    </div>
)

export default SignInAndSignup;
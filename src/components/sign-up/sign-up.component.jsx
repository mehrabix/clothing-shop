import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButoon from '../custom-button/custom-button.component';

import './sign-up.styles.scss';


class SignUp extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }


    handleSubmit = async event => {
        event.preventDefault();

        const { password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("password don't match");
            return;
        }
        this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''

        });
    }
    handleChange = event => {
        const { name, value } = event.target;

        this.setState({ [name]: value });
    }


    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return (

            <div className="sign-up">
                <h2 className="title">I do not have a account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required />
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required />
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='password' required />
                    <FormInput type='password' name='Confirm Password' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required />
                    <CustomButoon type='submit'>Sign Up</CustomButoon>
                </form>

            </div>
        )
    }
}

export default SignUp;
import React from 'react';
import './custom-button.style.scss';

const CustomButoon = ({ children, isSignIn, ...otherProps }) => (
    <button className={`${isSignIn ? 'signin' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomButoon;
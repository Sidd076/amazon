import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './login.css';
function Login() {
    return (

        <div class="login">
           
                <div class="logo">
                    <img src="./amazon-logo.svg" alt='logo' />
                </div>
                <form>
                <h2>Sign in</h2>
                <div class="input-form">
                    <p>Email or mobile phone number:</p>
                    <input type="email"/>
                </div>
                <div class="input-form">
                    <p>Password:</p>
                    <input type="password"/>
                </div>
                <button class='login-button'>Login</button>
                <p class="agree">
                By continuing, you agree to Amazon's <a rel="nofollow"  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"><span>Conditions of Use</span></a> and  
                 <a rel="nofollow"  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"><span> Privacy Notice</span></a>
                </p>

            </form>
            <div class="divider"><h5>New to Amazon?</h5></div>
            <button class="Signup-button">Create Your Account</button>

</div>
            


    )
}
export default Login;
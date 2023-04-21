import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './signup.css';

function Signup() {
    return (

        <div class="signup">
           
                <div class="logo">
                    <img src="./amazon-logo.svg" alt='logo' />
                </div>
                <form >
                <h2>Create Account</h2>
                <div class="input-form">
                    <p>Your Name:</p>
                    <input type="text"/>
                </div>
                <div class="input-form">
                    <p>Mobile number:</p>
                    <input type="number" min="1000000000" max="9999999999"/>
                </div>
                <div class="input-form">
                    <p>Email(optional):</p>
                    <input type="email"/>
                </div>
                <div class="input-form">
                    <p>Password:</p>
                    <input type="password"/>
                </div>
                <p class="mob">By enrolling your mobile phone number, you consent to receive automated security notifications via text message from Amazon. Message and data rates may apply.
                </p>
                
                <button class='login-button'>Continue</button>
                <p class= "sign">Already have an account? <a href="/login" >Sign in</a>
                </p>
                <p class="agree">
                By continuing, you agree to Amazon's <a rel="nofollow"  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=200545940"><span>Conditions of Use</span></a> and  
                 <a rel="nofollow"  href="https://www.amazon.in/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=200534380"><span> Privacy Notice</span></a>
                </p>

            </form>
          
            
</div>
            


    )
}
export default Signup;
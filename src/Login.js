// import React, { useState } from 'react'
import './Login.css';
import {Link} from "react-router-dom";
// import {auth} from "./firebase";

function Login() {
    // const history = useHistory();
    // const [email,setEmail]= useState();
    // const [password,setPassword]= useState();

    // const signIn = e =>{}
    // const register = e =>{
    //     e.preventDefault();

    //     auth.createWithUserEmailAndPassword(email,password)
    //     .then((auth) => {
    //         console.log(auth)
    //             history.push('./');
    //     })
    //     .cartch((err) => console.log(err))
    // }

  return (
    <div className='login'>
        <div className="login__container">

        <Link to='/'>
            <img src="./a/RR.png" alt="" className="login__Logo" />
        </Link>
            <h1>Sign-In</h1>

            <form action="">
                <h5>E-mail</h5>
                <input type="text" />

                <h5>Password</h5>
                <input type="Password" />


                <button type='submit' onClick={" "}>Sign In</button>
            </form>

            <p>
                By signing-in you agree to the Amazon Un-Real Clone Conditons of Use & Sale. 
                Please see your Privacy Notice, our Cookies Notice and out Intrest-Base Ads Notice. 
            </p>

            <button onClick={""}>Create Account</button>
        </div>
    </div>
  )
}

export default Login
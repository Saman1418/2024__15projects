import React, { useState } from "react";
import validator from 'validator';
import "./SignUp.css"
import querystring from "querystring";
import axios from "axios";
import { Link } from "react-router-dom";

const SignUp = ({setOpenLoginPopup}) => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [countryCode, setCountryCode] = useState("")
    const [number, setNumber] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPass, setconfirmPass] = useState("")
    

    // const [nameError, setNameError] = useState("")
    // const [emailError, setEmailError] = useState("")
    // const [numberError, setNumberError] = useState("")
    // const [passwordError, setpasswordError] = useState("")
    // const [confirmPasserror, setconfirmPasserror] = useState("")



    const submit = async (e) => {
        e.preventDefault()
        alert("Form Submit")


        let values = { name,email,countryCode,number,password,confirmPass};
        console.log(values)
    let response = await axios.post(
      "https://artisticyogaikriya.com/ikriya-video-service/signup",
      querystring.stringify(values),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",  
        },
      }
      );
      console.log(response)

        
        // setName("");
        // setEmail("");
        // setNumber("");
        // setPassword("");
        // setconfirmPass("")
        
    }

    // const validName = (e) => {
    //     var nameValue = e.target.value
    //     setName(nameValue)

    //     if (validator.isAlpha(name)) {
    //         setNameError('')
    //     } else {
    //         setNameError('Enter valid Name!')
    //     }
    // }


    // const validEmail = (e) => {
    //     var emailValue = e.target.value
    //     setEmail(emailValue)

    //     if (validator.isEmail(email)) {
    //         setEmailError('')
    //     } else {
    //         setEmailError('Enter valid Email!')
    //     }
    // }

    // const validNumber = (e) => {
    //     var emailNumber = e.target.value
    //     setNumber(emailNumber)

    //     if (validator.isNumeric(number)) {
    //         setNumberError('')
    //     } else {
    //         setNumberError('Enter valid Number!')
    //     }
    // }

    // const validPassword = (e) => {
    //     var passwordValue = e.target.value
    //     setPassword(passwordValue)

    //     if (validator.isStrongPassword(password)) {
    //         setpasswordError('')
    //     } else {
    //         setpasswordError('Enter valid Password!')
    //     }
    // }

    // const confirmPassword = (e) => {
    //     var confirmpassValue = e.target.value
    //     setconfirmPass(confirmpassValue)

    //     if (confirmPass === password) {
    //         setconfirmPasserror('')
    //     } else {
    //         setconfirmPasserror('Enter valid Confirm Password!')
    //     }
    // }


    return (
        <>
            <div className="center">
                <h1>Sign Up</h1>
                <form onSubmit={submit}>


                    <div className="txt-field">
                        <input 
                        placeholder="Name" 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)}

                         required></input>
                        {/* <span>{nameError}</span> */}
                    </div>


                    <div className="txt-field">
                        <input 
                        placeholder="Email" 
                        type="email" 
                        value={email} 
                        onChange={e => setEmail(e.target.value)} required></input>
                        {/* <span>{emailError}</span> */}
                    </div>

                    <div className="txt-field">
                        <input 
                        placeholder="countryCode" 
                        type="text" 
                        value={countryCode} 
                        onChange={e => setCountryCode(e.target.value)} required></input>
                        {/* <span>{emailError}</span> */}
                    </div>

                    <div className="txt-field">
                        <input 
                        placeholder="Number" 
                        type="text" 
                        value={number} 
                        onChange={e => setNumber(e.target.value)} required></input>
                        {/* <span>{numberError}</span> */}
                    </div>



                    <div className="txt-field">
                        <input 
                        placeholder="Password" 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} required></input>
                        {/* <span>{passwordError}</span> */}
                    </div>


                    <div className="txt-field">
                        <input 
                        placeholder="Confirm Password" 
                        type="password" 
                        value={confirmPass} 
                        onChange={(e) => setconfirmPass(e.target.value)} required></input>
                        {/* <span>{confirmPasserror}</span> */}
                        
                    </div>



                    {/* <div className="pass">Forget Password?</div> */}
                    <input type="submit" value="Signup" ></input>
                    <div className="signup-link">Already have account? 
                    <Link to={"/"}>
                    <span >Login</span>
                    </Link>
                    </div>

                </form>
            </div>
        </>
    )
}
export default SignUp;
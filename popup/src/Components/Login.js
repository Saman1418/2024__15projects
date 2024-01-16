// import React, { useState } from "react";
// import validator from "validator";
// import querystring from "querystring";
// import "./Login.css";
// import axios from "axios";
// import Cookies from 'universal-cookie';
// import { Link } from "react-router-dom";
// import { useHistory } from "react-router";

// const cookies = new Cookies();


// const Login = ({ accessAuth,onHide,openOTP,openSetPassword,openSignup}) => {
//   let History = useHistory();
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [grant_type, setzGrant_type] = useState("password");
//   const [ISDdata, setISDdata] = useState([])

//   const submit = async (e) => {
//     e.preventDefault();
//     alert("Form Submit");
//     // let grant_type = "password"
//     let values = { username, password, grant_type };
//     console.log(values)
//     let response = await axios.post(
//       "https://artisticyogaikriya.com/ikriya-user-service/oauth/token",
//       querystring.stringify(values),
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//           "Authorization":
//             "Basic JDJ5JDEyJDFRbnVCQmZiOWdMSlUvcU9OY21vcC5qSkJxVU5iN1NEVWNNYmVtdVdjaTZ4S1RsVXljZEU2OiQyeSQxMiRJYmlUbVFhZVF5ZURQTjBCOGRWVm8uYjJ2US95MmxXNk5QZ0wwM1RQT1M5VGhMNkEuRmQwaQ==",
            
//         },
//       }
//       );
//       let acc_token = response.data.access_token
//       cookies.set('cookee',acc_token , { path: '/' });
      

//       console.log(response.data.access_token)
//       // console.log(cookies.get('cookee'));
//       accessAuth(acc_token)



//     var ISD = await axios.get(
//       " https://artisticyogaikriya.com/ikriya-video-service/isd/list"
//       );
//       setISDdata(ISD.data.data)
//       console.log(ISDdata)
//       History.push("/VC");


      



    


//     // setUsername("");
//     // setPassword("");
//   };

//   const generateOTP = async (e)=>{
//     e.preventDefault()
//     let countryCode = "91"
//     let mobile = username
//     let values1 = {countryCode,mobile}
//     console.log(values1)
//     openOTP()
    

//   await fetch("https://artisticyogaikriya.com/ikriya-user-service/otp",
//   {
//     method:"POST",
//     headers:{
//       "Content-Type": "application/json",
//     },
//     body:JSON.stringify(values1),
//     redirect:"follow"

//   })
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));
// }

//   return (
//     <>
//       <div className="center">
//         <h1>Login</h1>
//         <form
//          onSubmit={submit}
//          >
//           <div className="txt-field">
//             <input
//               placeholder="Enter Email / Mobile Number"
//               type="text"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             ></input>
//           </div>

//           <div className="txt-field">
//             <input
//               placeholder="Enter Password"
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               // required
//             ></input>
//           </div>

//           <div className="pass">
          
//             <a onClick={()=>{openSetPassword()}} href="#">Reset Password?</a>
//           </div>
//           <input onClick={onHide} type="submit" value="Login"></input>

//           <div className="signup-link">
//             OR
//           </div>

//           <button type="submit" onClick={generateOTP}>generate OTP</button>
          
//           <br/>

//           <div className="signup-link">
//             To create your Account?{" "}
            
//             <a href="#"
//             onClick={()=>{openSignup()}}
//             >
//               SignUp
//             </a>
            
//           </div>
          
          
//         </form>
//       </div>
//     </>
//   );
// };
// export default Login;










//  // const validEmail = (e) => {
//   //     var emailValue = e.target.value
//   //     setEmail(emailValue)

//   //     if (validator.isEmail(email)) {
//   //         setEmailError('')
//   //     } else {
//   //         setEmailError('Enter valid Email!')
//   //     }
//   // }

//   // const validPassword = (e) => {
//   //     var passwordValue = e.target.value
//   //     setPassword(passwordValue)

//   //     if (validator.isStrongPassword(password)) {
//   //         setpasswordError('')
//   //     } else {
//   //         setpasswordError('Enter valid Password!')
//   //     }
//   // }






//     // await fetch(
//     //   "https://artisticyogaikriya.com/ikriya-user-service/oauth/token",
//     //   {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/x-www-form-urlencoded",
//     //       Authorization:
//     //         "Basic JDJ5JDEyJDFRbnVCQmZiOWdMSlUvcU9OY21vcC5qSkJxVU5iN1NEVWNNYmVtdVdjaTZ4S1RsVXljZEU2OiQyeSQxMiRJYmlUbVFhZVF5ZURQTjBCOGRWVm8uYjJ2US95MmxXNk5QZ0wwM1RQT1M5VGhMNkEuRmQwaQ==",
//     //     },
//     //     data: JSON.stringify({ username, password, grant_type }),
//     //   }
//     // ).then((response) => {
//     //   response.json().then((resp) => {
//     //     console.log(resp);
//     //   });
//     // });









//     // let otp = await axios.post(
//     //   "https://artisticyogaikriya.com/ikriya-user-service/otp",
//     //   querystring.stringify(values1),
//     //   {
//     //     method: "POST",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     redirect: "follow",
//     //   }
//     //   );
      
//     //   console.log(otp)




import React, { useState } from "react";
// import "../StyleCSS/Login.css";
import querystring from "querystring";
import axios from "axios";
import Cookies from "universal-cookie";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";


const cookies = new Cookies();

const Login = ({
  openForgotPassword,
  setForgot,
  setShow,
  logout,
  onHide,
  accessAuth,
  openOTP,
  openSetPassword,
  openSignup,
  modes,
  setPoplogin
}) => {
  let History = useHistory();
  const [code, setcode] = useState("91");
  const [username, setUsername] = useState(undefined);
  const [phoneData, setPhoneData] = useState(undefined);
  const [password, setPassword] = useState("");
  const [grant_type, setzGrant_type] = useState("password");
  const [showDrop, setshowDrop] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const [toogle,setToogle] = useState("Phone")
  // const [showDropdown,setShowDropdown] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      setErrorMessage("Enter login details");
      return
    }

    let values = { username, password, grant_type };
    console.log(values);
    let response;
    try {
    response = await axios.post(
      "https://artisticyogaikriya.com/ikriya-user-service/oauth/token",
      querystring.stringify(values),
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization:
            "Basic JDJ5JDEyJDFRbnVCQmZiOWdMSlUvcU9OY21vcC5qSkJxVU5iN1NEVWNNYmVtdVdjaTZ4S1RsVXljZEU2OiQyeSQxMiRJYmlUbVFhZVF5ZURQTjBCOGRWVm8uYjJ2US95MmxXNk5QZ0wwM1RQT1M5VGhMNkEuRmQwaQ==",
        },
      }
    );
    }
    catch(e) {
      const {response: {data}} = e;

      if (data?.code === 'UNAUTHORIZED') {
        setErrorMessage("User name/ Password incorrect");
      } else {
        setErrorMessage("Unknown server error");
      }
      return
    }

    setErrorMessage("");
    let acc_token = response.data.access_token;
    console.log(response);
    cookies.set("cookee", acc_token, { path: "/" });
    // accessAuth(acc_token)
    localStorage.setItem("auth", JSON.stringify(acc_token));
    console.log(response.data.access_token);
    // console.log(cookies.get('cookee'));
    // autoLogout(response.data.expires_in)

    if (acc_token) {
      History.push("/dashboard");
      onHide(false);
    }
  };


  const handleLoginError = () => {
    if (errorMessage) {
      setErrorMessage("");
    }
  }

  var settings = {
    allowDropdown: true,
    formatOnDisplay: true,
    formatNumber: 'number',
    // initialCountry: "in",
    defaultCountry: "in",
    placeholderNumberType: "MOBILE",
    separateDialCode: true,
    useMobileFullscreenDropdown:true,
    geoIpLookup: true,
    showDropdown: { showDrop },
    

    
  };

  // console.log(countryCode)

  

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header className="fixed-top d-flex align-items-center" id="header">
        <div className="container d-flex align-items-center">
          <a className="logo me-auto" href="index.html">
            <Link to={"/"}>
              <img alt="" src="img/logo.png" />
            </Link>
          </a>
        </div>
      </header>
      {/* <!-- End Header --> */}

      <section className="login">
        <div className="right-bg">
          <div className="container col-lg-12 py-5">
            <div className="row d-flex align-items-center">
              <div className="col-lg-5">
                <img src="img/login.png" alt="" style={{ width: "100%" }} />
              </div>
              <div className="col-lg-7">
                <h1
                  className="page-title text-start fw-bolder"
                  style={{ margin: "0 !important", fontSize: "2.5rem" }}
                >
                  Welcome <span>Back</span>
                </h1>

                <form id="loginForm" className="myForm py-5" onSubmit={handleSubmit}>
                  <div className="col-lg-12">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                            <label htmlFor="email">Phone No</label>
                          <IntlTelInput
                            {...settings}
                            className="form-control"
                            containerClassName="intl-tel-input"
                            type="number"
                            onClick={() => {
                              console.log("On Click");
                              setshowDrop(true);
                            }}
                            inputClassName="form-control"
                            // value={countryCode}
                            onPhoneNumberChange={(
                              status,
                              value,
                              countryData,
                              number,
                              id
                            ) => {
                              handleLoginError();
                              setPhoneData(value);
                              setUsername(`${code}-${value}`);
                              // console.log("onPhoneNumberChange value", value);
                              // console.log("onPhoneNumberChange number", number);
                            }}
                            css={["intl-tel-input", "form-control"]}
                            required
                          />
                          <span>{errorMessage}</span>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="****"
                            value={password}
                            onChange={(e) => { handleLoginError();
                              setPassword(e.target.value)}}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="alternate d-flex" style={{cursor:"pointer"}}>
                    
                      <a onClick={()=> {
                        // setForgot(true)
                        setPoplogin(modes.FORGET_PASSWORD);
                        setShow(true)
                        // openForgotPassword()
                    }} >Forgot Password? </a>
                  
                  </div>
                    {/* <div className="form-group form-check"> */}
                    
                      {/* <input
                        type="checkbox"
                        className="form-check-input"
                        id="remember"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="remember"
                        style={{ color: "#4D4D4D" }}
                      >
                        Remember me
                      </label> */}
                    {/* </div> */}
                  </div>
                  <div className="d-flex justify-content-center mt-4">
                    {/* <a type="submit" className="auth-btn">
                      Log In
                    </a> */}


                    {/* <input type="submit" value="Login"></input> */}
                    <input type="submit" className="auth-btn" value="Login"></input>
                  </div>
                  <div className="alternate d-flex justify-content-center">
                    <Link to={"/signUp"}>
                      <a href="#">Do not have an account? Sign Up</a>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};
export default Login;

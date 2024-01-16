import React, { useState } from "react";
// import "../Components/Model.css";
import Modal from "react-bootstrap/Modal";
import Login from "./Login.js";
import ResetPasssword from "./ResetPassword";
import SignUp from "./SignUp";
import VerifyOTP from "./VerifyOTP";

const Model = ({accessAuth,show, setShow}) => {
  // const [show, setShow] = useState(true);
  const [popLogin, setPoplogin] = useState(true)
  const [popVerifyOTP, setpopVerifyOTP] = useState(false)
  const [popResetPasssword, setPopResetPasssword] = useState(false)
  const [popSignup, setpopSignup] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const openOTP = ()=>{
    setpopVerifyOTP(true)
    setPoplogin(false)
  }

  const openSetPassword = ()=>{
    setPopResetPasssword(true)
    setPoplogin(false)

  }

    const openSignup = ()=>{
      setpopSignup(true)
      setPoplogin(false)

    }
    const closeVerifyOTP = ()=>{
      setShow(false)
    }
  return (
    <>

      <Modal show={show} onHide={handleClose}>  
      {popLogin && <Login accessAuth={accessAuth} onHide={handleClose} setPoplogin={setPoplogin} openOTP={openOTP} openSetPassword={openSetPassword} openSignup={openSignup}/>}
      {popVerifyOTP && <VerifyOTP closeVerifyOTP={closeVerifyOTP}/>}
      {popResetPasssword && <ResetPasssword/>}
      {popSignup && <SignUp/>}
      
      </Modal>
    </>
  );
};

export default Model;

import React,{Component, useState} from "react";
import {render} from 'react-dom';
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router";

const SignUpComponent = ()=>{
  const navigate = useNavigate();

  const signIn = ()=>{
    navigate('/signin')
  }

  const [userName, setUserName] =  useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [user, setUser] = useState();
  const [nameErr, setNameErr] = useState({});

  const axios = require('axios');

  // const handleSubmit = ()=>{
  //   const isValid = formValidation();
  //   navigate('/signin')
  //   handleSubmit();
  // }

  async function handleSubmit(e){
    e.preventDefault();

    // const isValid = formValidation();

    let payload = { userName, email, password};

    // paste here the api endpoint
    axios.post('', payload)
    .then(function (response){
      let data = response.data;
      console.log(data);

      if (data){
        signIn();
      }
    })
    .catch(function(error){
      if (error.response){
        setError(error.response.data)
      }
    });
    handleSubmit();
  };

  const formValidation = ()=>{
    const nameErr = {};
    let isValid = true;

    if(userName.trim().length < 2){
      nameErr.nameShort = "Your username is too short";
      isValid = false;
    }
    if(userName.trim().length > 10){
      nameErr.nameLong = "Your username is too long";
      isValid = false
    }
    setNameErr(nameErr);
    return isValid;
  }
  if (user){
    return <div>{user.userName} is logged in</div>;
  }
    return(
        <div>
          <div className="container">
            <div className="row">
              <div className = "col-md -6">
                <div className="content">
                  <div><h1>Find X</h1></div><br></br>
                  <div><p>See how experienced developers solve problems in real-time. Watching scripted
                    tutorials is great, but understanding how developers think is invaluable.</p>
                  </div>
                </div>
              </div>
              <div className = "col-md -6">
              <div className="form" data-testid="form">
                <div className="try"><button className="btn btn-primary">Try it free 7 days then $20/mo. thereafter</button></div>
              <form className="signUpForm">
                <div className="form-group">
                  <input type="string" value={userName} onChange = {({target})=> setUserName(target.value)} className="form-control" name="user_name" placeholder="User Name" /> 
                  {
                        Object.keys(error).map((key)=>
                        <div style={{color:'red'}}>{error[key]}</div>
                        )
                    }
                </div>
                <div className="form-group">
                  <input type="string" value = {email} onChange = {({target})=> setEmail(target.value)} className="form-control" name="email" placeholder="Email Address" /> 
                  {
                        Object.keys(error).map((key)=>
                        <div style={{color:'red'}}>{error[key]}</div>
                        )
                    }
                </div>
                <div className="form-group">
                  <input type="string" value = {password} onChange = {({target})=> setPassword(target.value)} className="form-control" name="password" placeholder="Password" /> 
                </div>
                <button type = "submit" onClick = {handleSubmit} className="btn btn-success" > SIGN UP</button>
                <div className="terms"><p><span className="by">By clicking the button, you are agreeing to our </span><span className="term"><a href = "#">Terms and Services</a></span></p></div>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default SignUpComponent;


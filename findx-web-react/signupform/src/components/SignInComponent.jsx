import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router";


const SignInComponent = ()=>{
  const navigate =  useNavigate();
  
  const signUp = ()=>{
    navigate("/signup")
  };

  const [userName, setUserName] =  useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [user, setUser] = useState();

  const axios = require('axios');

  async function handleSubmit(e){
    e.preventDefault();

    let payload = {userName, password};

    // insert the api endpoint here
    axios.post('',payload)
    .then(function(response){
      let data = response.data;
      console.log(data);

      if (data){
        signUp()
      }
    })
    .catch(function(error){
      if (error.response){
        setError(error.response.data)
      }
    });
  }

  var a = new Array();
  var up1 = new Object();
  up1={
    userName:userName,
    password:password
  };
  a.push(up1);
  localStorage.setItem('find_x', JSON.stringify(a));

  handleSubmit();

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
                  <input type="string" value={userName} onChange={({target}) => setUserName(target.value)} className="form-control" name="user_name" placeholder="User Name" /> <span className="help-block"></span> 
                  {
                        Object.keys(error).map((key)=>
                        <div style={{color:'red'}}>{error[key]}</div>
                        )
                    }
                </div>
                <div className="form-group">
                  <input type="string" className="form-control" name="password" placeholder="Password" /> <span className="help-block"></span> 
                </div>
                <button type= "submit" onClick={handleSubmit} className="btn btn-success" > SIGN IN</button>
                <div className="terms"><p><span className="by">By clicking the button, you are agreeing to our </span><span className="term"><a href = "#">Terms and Services</a></span></p></div>
              </form>
              </div>
              </div>
            </div>
          </div>
        </div>
    )
}
export default SignInComponent;
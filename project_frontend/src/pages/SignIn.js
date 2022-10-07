
import React from 'react';
import './signin.css';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
  
const SignIn = () => {
    const navigate = useNavigate();
    const [username,setUserName] = useState("");
    const [password,setPassword] = useState("");

    const onInputChangeUserName = event => {
        setUserName(event.target.value);
      };
    const onInputChangePassword = event => {
    setPassword(event.target.value);
    };

    const data = {"username":username,"password":password};
    const FormHandle = e => {
        e.preventDefault();
        addDataToServer(data)
    }
    function redirectforgot()

  {

   

    navigate('/Admin')

  }
  const setCookie= (cname, cvalue, exdays) => {

    const d = new Date();
  
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
  
    let expires = "expires="+ d.toUTCString();
  
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  
  }
 

    const addDataToServer = (cred) => {
        console.log(cred);
        axios.post("http://localhost:8080/api/auth/signin", cred).then(
            (response) => {
                
                console.log(response);
                // alert("user signed in Successfully");
                if (response.status==200) {
                  console.log("navigating");
                  setCookie("accessToken",response.data.accessToken,1);


                  
                  navigate('/loginsuccess');
              }
            }, (error) => {
                console.log(error);
                alert("Invalidusername password");
            }
        );
    }

  return (
    
    <div
      style={{
        display: 'flex',
        justifyContent: 'Center',
        alignItems: 'Center',
        height: '100vh'
      }}
    >
      
      <div className='signin'>
            <form onSubmit={e => FormHandle(e)} className="check-credentials-form">
                <br></br>
                <div id="email" class="form-group">
                    
                    <input type="text" class="form-control" name="username"  placeholder="Enter username" value={username} onChange={(e) => onInputChangeUserName(e)}required  />
                </div><br></br>
                <div id="password" class="form-group">
                    
                    <input type="password" class="form-control" name="password"  placeholder="Enter password" value={password} onChange={(e) => onInputChangePassword(e)} required />
                </div><br></br>
                
                <div className="btnsignin">
                    <button type="submit" class="btn btn-outline-secondary my-2 text-center mr-2">Sign In</button><br></br>
                    
                <br></br>
                
                 <button type="submit" class="btn btn-outline-secondary my-2  text-center mr-2 " onClick={redirectforgot}>forgot password</button><br></br> 
                
                 </div>
                
            </form>
        </div>
    </div>
    
  );
};

export default SignIn;
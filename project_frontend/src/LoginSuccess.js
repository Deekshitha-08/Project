import React,{ Component }  from 'react'

import { useNavigate } from 'react-router-dom';

import "./LoginSuccess.css";



export default function LoginSuccess() {

    let navigate=useNavigate();

   

        return (

            <div>

               

                <center>

               

                  <button class="testing" onClick={()=>{navigate("/product")}}>Products</button>

                  </center>

                 

                <center>

                    <h1>Welcome,Successfully Logged In ! ! </h1>

                    <img src="https://p.kindpng.com/picc/s/247-2479123_welcome-pp-hd-png-download.png" alt='welcome' />

                </center>

               

            </div>

        )

}
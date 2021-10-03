import React, { useState,useEffect } from 'react';
import Signin from './signin.js'
import Signup from './signup.js'

import './login.css';
function Login() {
    const [signin, setsignin] = useState(true)
    let signi =()=>{
        setsignin(true)

    }
    let signu =()=>{
        setsignin(false)

        
    }
    

    
    return (
        <>
            <div className="body">
                <div className="container">
                <h1 className='px-4' > Login Form</h1>

                    <div className="row one" >
                        <div className="col">
                            <button onClick={signi} >Sign In</button>
                            
                        </div>
                        <div className="col">
                          
                            <button onClick={signu}>Sign Up</button>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col colone">

         {

            signin==true?<Signin/>:<Signup/>
         }
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Login

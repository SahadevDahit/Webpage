import React, { useState } from 'react';
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
                <div className="container shadow-lg p-3 mb-3  mx-2 bg-white rounded">
                <h1 className='px-4 text-center ' > Login Form</h1>

                    <div className="row shadow-lg p-3 mb-3 bg-white rounded" >
                        <div className="col  ">
                            <button className='btnn shadow-lg  mb-1 bg-white rounded' onClick={signi} ><h3>SIGN IN</h3></button>
                            
                        </div>
                        <div className="col ">
                          
                            <button className='btnn shadow-lg  mb-1 bg-white rounded' onClick={signu}><h3>SIGN UP</h3></button>
                        </div>
                    </div>
                    <div className="row two">
                        <div className="col colone">

         {

            signin===true?<Signin/>:<Signup/>
         }
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}

export default Login

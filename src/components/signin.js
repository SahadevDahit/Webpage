import React from 'react'
import { useRef } from 'react'
import './signin.css'
const Signin = () => {
    const username = useRef(null);
    const password = useRef(null);
    const handlesubmit = (event) => {
        event.preventDefault();
      


    }

    return (
        <>

            <div className="card shadow-lg p-3 mb-5 bg-white rounded">

                <form className="align-items-center">
                    <div className="mb-3 mt-3 mx-3">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" ref={username} placeholder='Enter your email' required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3 mx-3">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" ref={password} placeholder='Enter your password' required className="form-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3 mx-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" for="exampleCheck1">Check me out</label>
                    </div>
                    <button type="submit" onClick={handlesubmit} className=" mx-3 mb-3 btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}

export default Signin

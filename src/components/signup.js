import React from 'react'
// import { Form, Button, Col, Row } from 'react-bootstrap'
import './signup.css'

const singup = () => {
    return ( <>
      <div className="signup shadow-lg p-3 mb-5 bg-white rounded">

<form className=''>

    <div className="mb-3 my-2 px-2">
        <label for="exampleInputEmail1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    </div>
    <div className="mb-3 px-2">
        <label for="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" className="form-control" id="password"/>
    </div>
    <div className="mb-3 px-2">
        <label for="exampleInputPassword1" className="form-label">Confirm Password</label>
        <input type="password" className="form-control" id="exampleInputPassword1"/>
    </div>

    <div className="mb-3 mx-2 form-check">
        <input type="checkbox" className="form-check-input " id="exampleCheck1"/>
        <label className="form-check-label " for="exampleCheck1">Check me out</label>
    </div>
    <button type="submit" className="btn btn-primary m-2">Submit</button>
</form>
</div>
    
    </>
     
    )
}

export default singup
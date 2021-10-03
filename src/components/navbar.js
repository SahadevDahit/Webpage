import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
    let css = {
        color: "White",
        fontSize: "1.5rem",
        marginRight: "20px",

    }
    return (
        <div className="" style={{position:'sticky',top:'0px',width:'100%'}}>

            <nav className="navbar navbar-expand-lg navbar-light bg-dark sticky">
                <div className="container-fluid text-light">
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <h1>React JS</h1>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0"  >
                            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" style={css} aria-current="page" ><i className="fa fa-fw fa-home"></i>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/download" className="nav-link active" style={css} ><i className="bi bi-cloud-arrow-down"></i> DOWNLOAD</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link active " style={css}  tabIndex="-1"><i className="fa fa-fw fa-envelope"></i>CONTACT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link active " style={css}  tabIndex="-1"><i className="fa fa-fw fa-user"></i>LOGIN</NavLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar

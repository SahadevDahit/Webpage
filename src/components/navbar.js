import React from 'react'
import { NavLink } from 'react-router-dom'
const navbar = () => {
    let css = {
        color: "White",
        fontSize: "1.2rem",
        marginRight: "20px",

    }
    return (
       
        



<nav className="navbar navbar-dark navbar-expand-sm bg-dark sticky-top">
        <div className="container">
        <a href="/" className="navbar-brand">
        <i className="fas fa-blog"></i> &nbsp;
        React JS
        </a>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
        </button>


        <div id="navbarCollapse" className="collapse navbar-collapse">
        <ul className="navbar-nav ms-auto">
            <li className="nav-item">
                                <NavLink to="/" className="nav-link active" style={css} aria-current="page" ><i className="fa fa-fw fa-home"></i>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/download" className="nav-link active" style={css} ><i className="bi bi-cloud-arrow-down"></i> DOWNLOAD</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link active " style={css} tabIndex="-1"><i className="fa fa-fw fa-envelope"></i>CONTACT US</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/login" className="nav-link active " style={css} tabIndex="-1"><i className="fa fa-fw fa-user"></i>LOGIN</NavLink>
                            </li>
        </ul>
        </div>



    </div>
  </nav>
        )
}

export default navbar

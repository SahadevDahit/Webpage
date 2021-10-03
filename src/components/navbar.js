import React from 'react'

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
                                <a className="nav-link active" style={css} aria-current="page" href="/"><i className="fa fa-fw fa-home"></i>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" style={css} href="/download"><i className="bi bi-cloud-arrow-down"></i> DOWNLOAD</a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link active " style={css} href="/contact" tabIndex="-1"><i className="fa fa-fw fa-envelope"></i>CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active " style={css} href="/login" tabIndex="-1"><i className="fa fa-fw fa-user"></i>LOGIN</a>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default navbar

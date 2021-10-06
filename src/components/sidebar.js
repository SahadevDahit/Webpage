import React from 'react'
import Image from '../images/library.jpg'
import Module from './modules'
import './sidebar.css'
const Sidebar = () => {
   
   
      
    const w3_open = () => {
        document.getElementById("main").style.marginLeft = "25%";
        document.getElementById("mySidebar").style.width = "25%";
        document.getElementById("mySidebar").style.display = "block";
        document.getElementById("openNav").style.display = 'none';
    }
    const w3_close = () => {
        document.getElementById("main").style.marginLeft = "0%";
        document.getElementById("mySidebar").style.display = "none";
        document.getElementById("openNav").style.display = "inline-block";
    }

    return (
        <>
       
            <div className="w3-sidebar w3-bar-block w3-card w3-animate-left" style={{ display: "none" }} id="mySidebar">
                <button className="w3-bar-item w3-button w3-large bg-secondary fs-2"
                    onClick={w3_close}>Close &times;</button>
                <div className='bg-danger h-100' > 
                    <button className="w3-bar-item w3-button fs-4"  onClick={()=>{window.scrollTo(0, 600);}}>Introduction</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,930)}>Installation</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,1150)}>Pre-requisties</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,1400)}>Default Login</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,1900)}>Change Credantials</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,2300)}>Forgot Credentials</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,2800)}>Institute Details</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,3300)}>Books Records</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,3800)}>Students Records</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,4300)}>Teachers Records</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,5000)}>Staff Records</button>
                    <button className="w3-bar-item w3-button fs-4" onClick={()=>window.scrollTo(0,5700)}>Issuing/Depositing Books</button>
 
                </div> 
            </div>
            <div id="main">

                <div className="w3-teal d-flex " style={{ position: 'sticky', top: '50px', justifyContent: 'space-between' }}>
                    <button id="openNav" className="w3-button w3-teal w3-xlarge" onClick={w3_open}>&#9776;</button>
                  <h1 className="text-dark" style={{ marginRight: '25rem' }}> Library Management System</h1>

                </div>
                <div className="sidebody w-100">
                <div>
                    <img src={Image} alt="Car" style={{ width: "100%", height: '60%' }} />
                </div>
                <div className='w-100'>
                    <Module />
                </div>

                </div>

            </div>


        </>
    )
}

export default Sidebar

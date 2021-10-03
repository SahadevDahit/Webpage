import React from 'react'
import Data from './data'
import ReactPlayer from 'react-player'
import { useState,useEffect } from 'react'
const Modules = () => {
useEffect(() => {
   
}, [])
    const [data, setdata] = useState(Data)
    return (
        <>
            <div className='bg-dark w-100 h-100 text-white d-grid py-5 text-center '  style={{scrollBehavior:'smooth'}}>

                <div className='py-3 mx-5'>
                    <h2 className='text-decoration-underline'>Introduction</h2>
                    <article  >
                        <p >It is the way of dealing the book transaction in a systematic way in the computer desktop application form. </p>
                        <p> It facilitates an administrative user to add new data, update data, delete data, search particular data if necessary and allows to exit after performing the required transaction.</p>
                        <p>  It keeps the records of issuing books  and detailed information about books and it’s members along with the transaction between them. It allows the administrative user to perform all the crud operation.  </p>
                        <p>  It is able to handle expected and un-expected error in ways that prevent loss in information and long downtime period. It have inbuilt error testing to identify invalid username and password.   </p>
                        <p>  It can handle large number of data without any fault.</p>
                    </article>

                </div>
                <div className='py-3'>
                    <h2 className='text-decoration-underline'>Installation</h2>
                    <p>For running setup file on the desktop appliation you need to have a internet connection while installing. After installing you can perform without any internet connection</p>
                    <p>For the installation of setup files of library management system just go in download section.</p>
                    <p>And for the source code download click this link <a target='_blank' href="https://github.com/SahadevDahit/Library-Management-System">github link</a></p>
                    <p>After downloading the source, just open the folder and open the .sln file in Microsoft Visual Studio</p>
                </div>

                <div className='py-4 '>
                    <h2 className='text-decoration-underline' >Prerequistis to open the source code solution</h2>
                    <p>  SQL Management Server</p>
                    <p>  Microsoft Visual  Studio 2019</p>
                    <p>  SQL Server</p>
                    <p>  A computer system with minimum of 2 GB of RAM required</p>
                </div>



                {
                    data.map((value) => {


                        return (
                            <div data-aos={value.animation} data-aos-duration="1000" data-aos-delay="80" key={value.id} className='bg-dark w-100 h-100 text-white d-grid ' style={{ placeItems: 'center', height: '100%', paddingTop: '2rem' }}>
                                <h1>{value.id}. {value.title}</h1>
                                {/* <video width="800" height="300" controls  loop muted>
                                    <source src={value.url} type="video/mp4/youtube" />
                                    Your browser does not support the video tag.
                                </video> */}
                                <ReactPlayer url={value.url} />
                                <div style={{ width: '50%' }} >
                                    <article  >
                                        <p >{value.description}</p>
                                    </article>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
           <h2 className='bg-dark w-100 text-center pb-5 text-uppercase' style={{color:'yellowgreen'}}>Thank you !!! Have a good time.</h2>
        </>
    )
}

export default Modules

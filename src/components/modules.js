import React ,{memo} from 'react'
import Data from './data'
import ReactPlayer from 'react-player'
import { useState, useEffect } from 'react'
import './modules.css'
const Modules = () => {
    useEffect(() => {

    }, [])
    const [data, setdata] = useState(Data)
    return (
        <>
            <div className=' intopart  bg-dark  h-100 text-white d-grid pt-5 text-center ' style={{ scrollBehavior: 'smooth' }}>

                <div className='love  '>
                    <h2 className='text-decoration-underline'>Introduction</h2>
                    <article  >
                        <p >It is the way of dealing the book transaction in a systematic way in the computer desktop application form. </p>
                        <p> It facilitates an administrative user to add new data, update data, delete data, search particular data if necessary and allows to exit after performing the required transaction.</p>
                        <p>  It keeps the records of issuing books  and detailed information about books and it’s members along with the transaction between them. It allows the administrative user to perform all the crud operation.  </p>
                        <p>  It is able to handle expected and un-expected error in ways that prevent loss in information and long downtime period. It have inbuilt error testing to identify invalid username and password.   </p>
                        <p>  It can handle large number of data without any fault.</p>
                    </article>

                </div>
                <div className='love py-3'>
                    <h2 className='text-decoration-underline'>Installation</h2>
                    <p>For running setup file on the desktop appliation you need to have a internet connection while installing. After installing you can perform without any internet connection</p>
                    <p>For the installation of setup files of library management system just go in download section.</p>
                    <p>And for the source code download click this link <a target='_blank' href="https://github.com/SahadevDahit/Library-Management-System">github link</a></p>
                    <p>After downloading the source, just open the folder and open the .sln file in Microsoft Visual Studio</p>
                </div>

                <div className='love py-4 '>
                    <h2 className='text-decoration-underline' >Prerequistis to open the source code solution</h2>
                    <p>  SQL Management Server</p>
                    <p>  Microsoft Visual  Studio 2019</p>
                    <p>  SQL Server</p>
                    <p>  A computer system with minimum of 2 GB of RAM required</p>
                </div>

<ul>
                {
                    data.map((value) => {
return(
                     <li key={value.id}>

                            <div className='love1 h-100 align-items-center' >
                                <div key={value.id} data-aos={value.animation} data-aos-duration="800" data-aos-delay="70"  className=' bg-dark  h-100 text-white d-grid text-center ' style={{ placeItems: 'center', height: '100%', paddingTop: '2rem', alignItems: 'center' }}>
                                    <h1>{value.id}. {value.title}</h1>

                                    <div className="player-wrapper   ">
                                        <ReactPlayer
                                            url={value.url}
                                            className="react-player"
                                            playing
                                            width="100%"
                                            height="100%"
                                            controls={true}
                                            config={{
                                                youtube: {
                                                  playerVars: { showinfo: 1 }
                                                }
                                              }}
                                        />
                                    </div>

                                    <div className="love2 text-center"  >
                                        <article className='pt-3'  >
                                            <p >{value.description}</p>
                                        </article>
                                    </div>
                                </div>
                            </div>
                            </li>
)
                    })
                }
                </ul>
            <footer className='w-100  bg-black ' style={{fontSize:'1.2rem'}}>THANK YOU ❤️❤️❤️ HAVE A NICE DAY❤️❤️❤️</footer>
            </div>
        </>
    )
}

export default  memo(Modules)

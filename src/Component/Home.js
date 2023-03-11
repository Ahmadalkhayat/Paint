import React from "react"
 
const Home=()=>{
  return(
    <div className="home ">
        <div className="content-home text-center  ">
        
            <img alt="" data-aos="zoom-out"  data-aos-offset="300" data-aos-duration="2000" src="https://images.pexels.com/photos/1666756/pexels-photo-1666756.jpeg?auto=compress&cs=tinysrgb&w=600" className="img-fluid"/>
            <h2 className="fs-1 text-center">Welcome to <span className="world-paint">World paint</span></h2>
            <p className="fs-4 text-center">Sed feugiat, leo id dictum tristique, ligula ante egestas risus, eget hendrerit ipsum sem in nunc. Integer in facilisis neque curabitur facilisis, augue quis fringilla dictum.</p>

               <div className=" d-flex justify-content-evenly align-items-center flex-wrap"> 
                <a href="/" className=" fs-5 btn btn-primary  ">Get Started</a>
                <a href="/" className="d-flex align-items-center navbar-brand world-paint">
                <i className="fa-regular fa-circle-play fs-2  navbar-brand "></i>
                <span className=" navbar-brand fs-5 ">Watch Video</span></a>
             </div>
            </div>
         </div>
       

  )}

export default Home


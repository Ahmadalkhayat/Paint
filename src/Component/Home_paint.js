import React from "react"

const Paint =()=>{
    return(
<div className="home-paint  ">
      <div className="first ">
        <h1 className="text-center h1-paint ">How To Get Your Home Painted?</h1>
      </div>
      <div className=" cards ">
         <div className="col-sm-8 card aos-init aos-animate "  data-aos="fade-rigth" data-aos-duration="3000"
         data-aos-delay="200">
            <div className=" text-center">
            <i className="bi bi-pencil fs-2"></i>
            <h3 className="h1-paint"> Reach as</h3>
            <p>Suspendisse gravida ex id nulla diet eget soda  </p>
            </div>
        </div>
        <div className="col-sm-8 card aos-init aos-animate"  data-aos="fade-up" data-aos-duration="3000"
        data-aos-delay="300">
            <div className=" text-center">
            <i className="bi bi-brush fs-2"></i>
            <h3 className="h1-paint"> Site Inspection</h3>
            <p>Suspendisse gravida ex id nulla diet eget soda  </p>
            </div>
        </div>
        <div className="col-sm-8 card aos-init aos-animate"  data-aos="fade-down" data-aos-duration="3000"
        data-aos-delay="400">
            <div className=" text-center">
            <i className="bi bi-bricks fs-2"></i>
            <h3 className="h1-paint"> Validation of Wall</h3>
            <p>Suspendisse gravida ex id nulla diet eget soda  </p>
            </div>
        </div>
        <div className="col-sm-8 card aos-init aos-animate" data-aos="fade-left" data-aos-duration="3000"
        data-aos-delay="500">
            <div className=" text-center">
            <i className="bi bi-paint-bucket fs-2"></i>
            <h3 className="h1-paint"> Approval & Execution</h3>
            <p>Suspendisse gravida ex id nulla diet eget soda  </p>
            </div>
        </div>
        
      </div>
    </div>
    )
}
    


export default Paint

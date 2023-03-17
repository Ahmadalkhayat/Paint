import React from "react";

const Info=(props)=>{
    return(
        <div className="info d-flex pt-5  ">
        <i className={`${props.icon} pe-3 pt-3 fs-1`}></i>
        <div>
        <h3>{props.title} </h3>
        <p>{ props.p}</p>
        </div>
        </div>

    )
}
const Service=()=>{
    const info=[
        {id:1, title:"Shifting and Protection of Home & Furniture",
        p:"Suspendisse gravida ex id nulla diet eget soda tellus",
        icon:"fa-sharp fa-solid fa-paint-roller"},

        {id:2, title:"Color consultant to help in color selection",
               p:"Suspendisse gravida ex id nulla diet eget soda tellus",
               icon:"fa-solid fa-brush"},

        {id:3, title:"Transparent Pricing and Value for Money",
               p:"Suspendisse gravida ex id nulla diet eget soda tellus",
               icon:"fa-solid fa-palette"}
    ]
    const members=info.map(member=>{
        return <Info
      key={member.id}
      title={member.title}
      icon={member.icon}
      paragraph={member.p}
         />

    })
    return(
        <div className="service pb-5">
        <div className="container">
        <div className=" col-lg-6">
        <div className="title " >
         <h1 className="text-center fs-1 fw-bold aos-init aos-animate" data-aos="zoom-in" data-aos-duration="2000">Services</h1>
         <h2 className="aos-init aos-animate" data-aos="fade-left" data-aos-duration="2000"> Why Our Painting Service Is Better Than Others </h2>
         </div>
         <div className="information" data-aos="zoom-out" data-aos-duration="2000">
        {members}
           </div>
          </div>
         </div>
        </div>
    )
}
export default Service
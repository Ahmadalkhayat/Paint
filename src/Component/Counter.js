import React ,{useState}from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
const Counter = ()=>{
const [count,setcount]=useState(false);
    return(
        <div className="counter ">
        <div className="box text-center">
            <div className="col-lg-3 col-md-6">
            <i className="fa-sharp fa-solid fa-paint-roller pb-4 fs-1"></i>
            <ScrollTrigger onEnter={()=>{setcount(true)}} onExit={()=>{setcount(false)}}>
            <h2>
            {count && <CountUp start={0} end={100} duration={2} delay={0} /> }+ </h2>
            </ScrollTrigger>

            <p className="fs-3 fw-bold pt-2 mb-3" >Satisfied Clients</p>
            </div>
            <div className="col-lg-3 col-md-6">
            <i className="fa-solid fa-brush fs-1 pb-4"></i>
            <ScrollTrigger onEnter={()=>{setcount(true)}} onExit={()=>{setcount(false)}}>
            <h2>
            {count && <CountUp start={250} end={500} duration={2} delay={0} /> }K </h2>
            </ScrollTrigger>
            <p className="fs-3 fw-bold pt-2 pt-2 mb-3" >Active Clients</p>
            </div>
            <div className="col-lg-3 col-md-6">
            <i className="fa-solid fa-palette fs-1 pb-4 "></i>
            <ScrollTrigger onEnter={()=>{setcount(true)}} onExit={()=>{setcount(false)}}>
            <h2>
            {count && <CountUp start={65} end={100} duration={2} delay={0} /> }M </h2>
            </ScrollTrigger>
            <p  className="fs-3 fw-bold pt-2" >Industry Solutions</p>
            </div>
            <div className="col-lg-3 col-md-6">
            <i className="fa-solid fa-paintbrush fs-1 pb-4"></i>
            <ScrollTrigger onEnter={()=>{setcount(true)}} onExit={()=>{setcount(false)}}>
            <h2>
            {count && <CountUp start={100} end={1000} duration={2} delay={0} /> }B </h2>
            </ScrollTrigger>
            <p className="fs-3 fw-bold pt-2">Team Members</p>
            </div>
            
        </div>
       
            </div>
    )

}
export default Counter
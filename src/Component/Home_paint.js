import React from "react"


const Card=(props)=>{
 return(
   <div className="col-sm-8 card aos-init aos-animate " 
    data-aos={props.data_aos} data-aos-duration={props.data_aos_duration}  data-aos-delay={props.data_aos_delay}>
            <div className=" text-center">
            <i className={`${props.icon} fs-2`}  ></i>
            <h3 className="h1-paint"> {props.title}</h3>
            <p> {props.paragraph} </p>
            </div>
        </div>

)
}

const Paint =()=>{
  const info=[
    {id:1,title:"Reach as",par:"Suspendisse gravida ex id nulla diet eget soda ",icon:"bi bi-pencil",
               data_aos:"fade-rigth",data_aos_duration:"3000",data_aos_delay:"200"},
    
    {id:2,title:"Site Inspection",par:"Suspendisse gravida ex id nulla diet eget soda ",icon:"bi bi-brush",
               data_aos:"fade-up",data_aos_duration:"3000",data_aos_delay:"300" },

     {id:3,title:"Validation of Wall",par:"Suspendisse gravida ex id nulla diet eget soda ",icon:"bi bi-bricks",
               data_aos:"fade-down",data_aos_duration:"3000",data_aos_delay:"400" },

     {id:4,title:"Approval & Execution",par:"Suspendisse gravida ex id nulla diet eget soda ",icon:"bi bi-paint-bucket",
               data_aos:"fade-left",data_aos_duration:"3000",data_aos_delay:"500"}
  ]
        
  const members=info.map(member=>{
    return <Card 
      key={member.id}
      title={member.title}
      icon={member.icon}
      paragraph={member.par}
      data_aos={member.data_aos}
      data_aos_duration={member.data_aos_duration}
      data_aos_delay={member.data_aos_delay}

    />
  })
    return(
      
<div className="home-paint  ">

      <div className="first ">
        <h1 className="text-center h1-paint ">How To Get Your Home Painted?</h1>
      </div>
      <div className=" cards ">
        {members}
         </div>
    </div>
    )
}
    


export default Paint

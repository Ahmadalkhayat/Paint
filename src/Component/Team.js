import React from "react";

const Person=(props)=>{
    return(
    
    <div className=" col-md-4 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div className="team-member">
              <div className="member-img">
                <img src={props.img} className="img-fluid" alt=""/>
              </div>
              <div class="member-info">
                <div class="social">
                  <a href="/"><i className="bi bi-twitter"></i></a>
                  <a href="/"><i className="bi bi-facebook"></i></a>
                  <a href="/"><i className="bi bi-instagram"></i></a>
                  <a href="/"><i className="bi bi-linkedin"></i></a>
                </div>
                <h4>{props.name}</h4>
                <span>{props.working}</span>
              </div>
            </div>
          </div>
  )
}
const Team=()=>{
  const info=[
    {id:1, img:"https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Bestbe", work:"Painter"},
    {id:2, img:"https://images.pexels.com/photos/6474483/pexels-photo-6474483.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Maria" , work:"Painter"},
    {id:4, img:"https://images.pexels.com/photos/3186683/pexels-photo-3186683.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"joy "  , work:"Painter"},
    {id:3, img:"https://images.pexels.com/photos/8396140/pexels-photo-8396140.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Liza " , work:"Painter"},
  ]
  const members=info.map(member=>{
    return <Person 
      key={member.id}
      img={member.img}
      name={member.nam}
      working={member.work}
      
    />
  })
return(
    <div className="Team pt-4 pb-5 w-100">
        <div className="container">
          <div className=" aos-init aos-animate" data-aos="zoom-out" data-aos-delay="200"  data-aos-duration="2000"> 
          <h2 className="text-center fs-2"> Our Team</h2>
          <p className="text-center fs-3 fw-bold"> Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga</p>
          </div>
           <div className="team pt-5 w-100 d-flex flex-wrap justify-content-around align-items-center">
          
           {members}
        </div>  

    </div>
    </div>)

}
export default Team
import React from "react";
 const photo=["https://images.pexels.com/photos/1666756/pexels-photo-1666756.jpeg?auto=compress&cs=tinysrgb&w=600",
 "https://kinforce.net/peint/wp-content/uploads/2021/05/funny-decorator-robot-repaints-the-wall-of-the-roo-P6UBL52.jpg"]
const Person=(props)=>{
    return(
    
    <div className=" col-md-4 d-flex aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
            <div class="team-member">
              <div class="member-img">
                <img src={props.p.img} class="img-fluid" alt=""/>
              </div>
              <div class="member-info">
                <div class="social">
                  <a href="/"><i class="bi bi-twitter"></i></a>
                  <a href="/"><i class="bi bi-facebook"></i></a>
                  <a href="/"><i class="bi bi-instagram"></i></a>
                  <a href="/"><i class="bi bi-linkedin"></i></a>
                </div>
                <h4>{props.p.nam}</h4>
                <span>{props.p.work}</span>
              </div>
            </div>
          </div>
  )
}
const Team=()=>{
    return(
    <div className="Team pt-4 pb-5 w-100">
        <div className="container">
          <div> 
          <h2 className="text-center fs-2"> Our Team</h2>
          <p className="text-center fs-3 fw-bold"> Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga</p>
          </div>
           <div className="team pt-5 w-100 d-flex flex-wrap justify-content-around align-items-center">
          <Person   p={{img:"https://images.pexels.com/photos/6474472/pexels-photo-6474472.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Bestbe", work:"Chief Executive Officer"}}/>
          <Person   p={{img:"https://images.pexels.com/photos/6474483/pexels-photo-6474483.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Maria", work:"Chief Executive Officer"}}/>  
           <Person   p={{img:"https://images.pexels.com/photos/8396140/pexels-photo-8396140.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"Liza ", work:"Chief Executive Officer"}}/>
           <Person   p={{img:"https://images.pexels.com/photos/3186683/pexels-photo-3186683.jpeg?auto=compress&cs=tinysrgb&w=600" ,nam:"joy malrino", work:"Chief Executive Officer"}}/>
         
           </div>
         </div> 

    </div>)
}

export default Team
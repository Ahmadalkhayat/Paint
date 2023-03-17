import React from "react"

const About =()=>{
    return(
<div  className="about">
        <div className="container mb-5 aos-init aos-animate" data-aos="fade-up">
                <h2 className="text-center">About Us</h2>
                <p className="text-center fs-3 fw-bold ">Architecto nobis eos vel nam quidem vitae temporibus voluptates qui hic deserunt iusto omnis nam voluptas asperiores sequi tenetur dolores incidunt enim voluptatem magnam cumque fuga.</p>
            </div>
            
       <div className=" container dist d-flex  justify-content-around align-items-center aos-init  aos-animate pb-lg-5 pb-md-5">

             <div className="col-lg-6 col-md-12 text-center" data-aos="flip-left"  data-aos-easing="ease-out-cubic" data-aos-duration="3000">
                <div className="about-img">
                     <img className=" img-fluid image" alt="" src="https://img.freepik.com/free-photo/construction-workers-decorate-apartment-hold-painting-roller-paper-blueprint-wear-uniform_273609-52636.jpg?size=626&ext=jpg&ga=GA1.2.225509727.1676110775&semt=sph"  />
                    </div>
                </div>
             
                <div className=" col-lg-3 col-md-7  ps-md-5 " data-aos="fade-up" data-aos-duration="3000">
                <div className="about-img">
                <h2>It’s The Perfect Time To Paint Your Home</h2>
                <p>Etiam scelerisque nec elit ac efficitur. Duis vestibulum magna sit amet ante gravida malesuada. Nunc gravida dui scelerisque libero venenatis hendrerit vestibulum euismod, lacus.</p>
                <button className="btn btn-primary w-100">Learn More</button>
                </div></div>
             
                <div className=" col-lg-3 col-md-5 " data-aos-easing="ease-out-cubic" data-aos="fade-up-left" data-aos-duration="3000">
                <div className="about-img">
                     <img  src="https://kinforce.net/peint/wp-content/uploads/2021/05/Paint-Roller-With-Paint.H03.2k.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
     </div>

    )
}

export default About
 

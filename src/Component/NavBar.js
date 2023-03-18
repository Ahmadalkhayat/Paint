import React from "react"
import { BrowserRouter ,Routes,Route , Link} from "react-router-dom"
// import "../Style/_NAv.scss"

 const NavBar=()=>{
  return(
        <nav className="navbar navbar-expand-lg navbar-light  w-100 sticky-top" >
         <div className="container">
          <a className="logo navbar-brand fs-2" href="/"> 
           <img  src="https://img.freepik.com/premium-vector/paint-location-logo-design-with-concept-creative-color-premium-vector_638990-276.jpg?size=626&ext=jpg&ga=GA1.1.225509727.1676110775&semt=ais" alt="" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#main" aria-controls="main" aria-expanded="false" aria-label="Toggle navigation">
           <span className="navbar-toggler-icon"></span>
          </button>
          <div className="links collapse navbar-collapse" id="main" >
          
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 fs-5">
              <li className="nav-item"><Link className="nav-link active"  to="#" >Home </Link></li>
              <li className="nav-item"><Link className="nav-link "  to="/">About</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="/Services.js">Services</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="#">Gallery</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="#">Team</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="#">Blog</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="#">Pricing</Link></li>
              <li className="nav-item"><Link className="nav-link "  to="#">Contact</Link></li>
             
           </ul>
           
           <button className=" btn btn-primary ">Get Started</button>
          </div>
        </div>
      </nav>
      
)}
           

export default function RoterNav() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/Paint"  element={<NavBar />}>
        <Route  path="https://Ahmadalkhayat.github.io/Paint" element={<NavBar />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

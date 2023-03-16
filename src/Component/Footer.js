import React from "react";

const Footer=()=>{
    return(<div className="footer pt-5 pb-5 text-white-50 text-center text-md-start">
    <div className="container">
      <div className="row">
        <div className="col-md-6 col-lg-4">
          <div className="info mb-5">
            <img src="" alt="" className="mb-4" />
            <p className="mb-5">
              Pellentesque in ipsum id orci porta dapibus. Vivamus magna justo, lacinia eget consectetur sed,
              convallis at tellus.
            </p>
            <div className="copyright">
              Created By <span> Ahmad </span>
              <div>&copy; 2023 - <span>World Paint</span></div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h5 className="text-light">Links</h5>
            <ul className="list-unstyled lh-lg">
              <li>Home</li>
              <li>Our Services</li>
              <li>Portfolio</li>
              <li>Testimonials</li>
              <li>Support</li>
              <li>Terms and Condition</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-2">
          <div className="links">
            <h5 className="text-light">About Us</h5>
            <ul className="list-unstyled lh-lg">
              <li >Sign In</li>
              <li>Register</li>
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="col-md-6 col-lg-4">
          <div className="contact text-center">
            <h5 className="text-light">Contact Us</h5>
            <p className="lh-lg mt-3 mb-5">Get in touch with us via mail phone.We are waiting for your call or message</p>
            <a className="btn rounded-pill main-btn w-100" href="/">Ahmad AL Khayat@gmail.com </a>
            <ul className="d-flex mt-5 list-unstyled gap-3 justify-content-center">
              <li>
                <a className="d-block text-light " href="/"><i className="fa-brands fa-facebook text-center fs-4 facebook rounded-circle p-2"></i></a>
              </li>
              <li>
                <a className="d-block text-light " href="/"><i className=" fa-brands fa-twitter text-center fs-4 twitter rounded-circle p-2"></i></a>
              </li>
              <li>
                <a className="d-block text-light" href="/"><i className="fa-brands fa-linkedin text-center fs-4 linkedin rounded-circle p-2"></i></a>
              </li>
              <li>
                <a className="d-block text-light" href="/"><i className="fa-brands fa-youtube text-center fs-4 youtube rounded-circle p-2"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
)
}
export default Footer
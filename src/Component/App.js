import React from "react"
import "../Style/index.scss"
import RoterNav from "./NavBar"
import Home from "./Home"
import About from "./About"
import Paint from "./Home_paint"
import Counter from "./Counter"
import Service from "./Services"
import Team from "./Team"
import Tape from "./Tape"
import Footer from "./Footer"
import "../Style/index.css"
import Aos from 'aos';
import 'aos/dist/aos.css';
const App = ()=> {
  Aos.init();
 return (
  <div className="">
  <RoterNav />
  <Home />
  <Paint />
  <About /> 
  <Service />
  <Team />
  <Tape />
  <Counter />
  <Footer />
   </div>
   )
  }

export default App
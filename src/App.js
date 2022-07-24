import Navbar from "./components/Navbar"
import Cover from "./components/Cover"
import About from "./components/About"
import Skillset from "./components/Skillset"
import Projects from "./components/Projects"
import SocialMedia from "./components/SocialMedia"
import Footer from "./components/Footer"
import {Element} from "react-scroll"



function App() {
  return (
    <div className="w-full relative">
      <Navbar />
      <Element id='home'><Cover /></Element>
      <Element id='about'><About /></Element>
      <Element id='skillset'><Skillset /></Element>
      <Element id='project'><Projects /></Element>
      <Element id='contact'><SocialMedia /></Element>
      <Footer />
    </div>
  );
}

export default App;

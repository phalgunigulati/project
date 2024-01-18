import Navbar from "./Navbar";
import About from "./pages/About";
// import Home from "./pages/Home";
import News from "./pages/News";
// import Contact from "./pages/Contact";


function App() {
  let component
  switch(window.location.pathname){
    case "/":
      component = <About/>
      break
      case "/about":
      component = <About/> 
      break
      case "/news":
      component = <News/>
      break 
      // case "/contact":
      // component = <Contact/>
      // break
  }
  return (
    <>
    <Navbar/>
    <div className="container">
    {component}
    </div>
    </>
  );
}

export default App;

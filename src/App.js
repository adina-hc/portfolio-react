// Import resources
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import About from "./components/About/";
import Project from './components/Projects';
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  
  return (
    <>
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={About} path="/about" />
        <Route component={Project} path="/project" />
        <Route component={Resume} path="/resume" />
        <Route component={Contact} path="/contact" />
      </Switch>    
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;

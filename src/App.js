import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navBar";
import Footer from "./components/footer";
import Projects from "./components/nav-components/projects";
import About from "./components/nav-components/about";
import Skills from "./components/nav-components/skills";
import Certifications from "./components/nav-components/certifications";
import Contact from "./components/nav-components/contact";
import NotFound from "./components/not-found";
import Home from "./components/nav-components/home";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="mt-5 p-0 mx-0">
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/skills" component={Skills} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/contact" component={Contact} />
          <Route path="/not-found" component={NotFound} />
          <Route path="/" exact component={Home} />
          {/* <Redirect from="/" exact to="/contact" /> */}
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;

// import logo from "./logo.svg";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

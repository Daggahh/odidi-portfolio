import Head from "./components/Head";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Hero from "./components/Hero";
import "./index.css";

function App() {
  return (
    <div>
      <Head />
      <MobileMenu />
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;

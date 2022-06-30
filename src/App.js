import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <section className="Card--Section">
        <Cards />
      </section>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Chiron from "./chiron/Chiron";

function App() {
  return (
    <main className="relative flex flex-col items-center justify-center">
      <Header />
      <div className="absolute z-[5] top-[15%] w-[95%] h-[55%]">
        <Chiron />
      </div>
      <Hero/>
    </main>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import ParticlesBackground from "./components/ParticlesBackground";
import TypingIntro from './components/TypingIntro';


function App() {
  return (
    <div className="App" style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <ParticlesBackground />
      <main style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, padding: "2rem", color: "white" }}>
        <h1>My name is Chase Blodgett, welcome to my portfolio!</h1>
        <TypingIntro />
      </main>
    </div>
  );
}

export default App;

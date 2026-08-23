import Header from "./Header";
import Skills from "./Skills";
import Writeups from "./Writeups";
import Career from "./Career";
import Lab from "./Lab";
import Footer from "./Footer";

function App() {
  return (
    <div className="flex min-h-screen min-w-full flex-col items-center bg-zinc-950 px-4 text-zinc-300">
      <div className="w-full max-w-3xl">
        <Header />
        <Skills />
        <Writeups />
        <Career />
        <Lab />
        <Footer />
      </div>
    </div>
  );
}

export default App;

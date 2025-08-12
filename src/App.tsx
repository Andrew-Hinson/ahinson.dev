import Header from "./Header";
import Career from "./Career";
import ProjectList from "./Projects";
import Footer from "./Footer";




function App() {
  return (
    <div className="flex text-white bg-zinc-950 min-h-screen flex-col items-center min-w-full p-4">
      <div className="max-w-3xl w-full ">
      <Header />
      <Career />
      <ProjectList />
      <Footer />
      </div>
    </div>
  );
}

export default App;


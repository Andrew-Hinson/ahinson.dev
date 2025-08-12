import Header from "./Header";
import Intro from "./Intro";
import ProjectList from "./Projects";
import Footer from "./Footer";

function App() {
  return (
    <div className="font-sans min-h-screen bg-gray-100 text-gray-900">
      <Header />
      <Intro />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;


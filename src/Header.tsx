export default function Header() {
    return (
      <header className="flex justify-between items-center p-6 max-w-4xl mx-auto">
        <h1 className="text-lg font-bold">Your Name</h1>
        <nav>
          <ul className="flex gap-4">
            <li><a href="#projects" className="hover:underline">Projects</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </header>
    );
  }
  
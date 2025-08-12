import { GitHub, LinkedIn } from "./Icons";


export default function Header() {
    return (
      <header className="py-4 sm:py-10 flex flex-row justify-between">
        <div className="flex flex-col">
          <h1 className="font-bold text-xl p-0 m-0 ">Andrew Hinson</h1>
          <span className="text-neutral-200 p-0 m-0">Software Engineer</span>        
        </div>
        <nav>
          <ul className="flex gap-4">
            <li>
              <a 
              href="https://github.com/Andrew-Hinson" 
              className="hover:underline"
              target="_blank"
              rel="noopener noreferrer"
              >
              <GitHub/>
              </a>
            </li>
            <li>
              <a 
              href="https://www.linkedin.com/in/andrew-hinson-a052189a/" 
              className="hover:underline"              
              target="_blank"
              rel="noopener noreferrer"
              >
              <LinkedIn/>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
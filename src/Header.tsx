import { GitHub, LinkedIn } from "./Icons";
import { identity, links } from "./content";

export default function Header() {
  return (
    <header className="flex flex-col gap-4 py-8 sm:py-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl font-semibold text-zinc-50">{identity.name}</h1>
          <p className="text-zinc-300">{identity.title}</p>
          <p className="text-sm text-zinc-500">{identity.signal}</p>
        </div>
        <nav aria-label="Links">
          <ul className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm sm:justify-end">
            <li>
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center no-underline"
                aria-label="GitHub"
              >
                <GitHub />
              </a>
            </li>
            <li>
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center no-underline"
                aria-label="LinkedIn"
              >
                <LinkedIn />
              </a>
            </li>
            <li>
              <a href={links.email}>{links.emailLabel}</a>
            </li>
            <li>
              <a href={links.resume}>Resume</a>
            </li>
          </ul>
        </nav>
      </div>
      <p className="max-w-xl text-zinc-300">{identity.lede}</p>
    </header>
  );
}

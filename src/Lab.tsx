import { lab } from "./content";

export default function Lab() {
  return (
    <section className="mt-10 border-t border-zinc-800 pt-8">
      <h2 className="mb-3 text-sm font-medium uppercase tracking-wide text-zinc-500">
        Public lab
      </h2>
      <a href={lab.href} target="_blank" rel="noopener noreferrer">
        {lab.title}
      </a>
      <p className="mt-1 text-sm text-zinc-500">{lab.blurb}</p>
    </section>
  );
}

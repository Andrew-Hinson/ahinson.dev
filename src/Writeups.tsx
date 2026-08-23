import { writeups } from "./content";

export default function Writeups() {
  return (
    <section className="mt-10 border-t border-zinc-800 pt-8">
      <h2 className="mb-6 text-lg font-semibold text-zinc-50">Work</h2>
      <ul className="flex flex-col gap-8">
        {writeups.map((item) => (
          <li key={item.title}>
            <h3 className="mb-2 font-semibold text-zinc-100">{item.title}</h3>
            <p className="text-zinc-400">{item.problem}</p>
            <p className="text-zinc-400">{item.built}</p>
            <p className="text-zinc-400">{item.outcome}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

import { writeups, writeupsContext } from "./content";

export default function Writeups() {
  return (
    <section className="mt-10 border-t border-zinc-800 pt-8">
      <h2 className="text-lg font-semibold text-zinc-50">Work</h2>
      <p className="mb-6 text-sm text-zinc-500">{writeupsContext}</p>
      <ul className="flex list-disc flex-col gap-3 pl-5">
        {writeups.map((item) => (
          <li key={item} className="text-zinc-400">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}

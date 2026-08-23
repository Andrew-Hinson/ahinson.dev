import { skills } from "./content";

export default function Skills() {
  return (
    <ul className="flex flex-wrap gap-2" aria-label="Skills">
      {skills.map((skill) => (
        <li
          key={skill}
          className="rounded-sm border border-zinc-800 px-2 py-0.5 text-sm text-zinc-400"
        >
          {skill}
        </li>
      ))}
    </ul>
  );
}

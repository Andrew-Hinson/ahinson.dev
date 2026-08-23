import { career } from "./content";

export default function Career() {
  return (
    <section className="mt-10 border-t border-zinc-800 pt-8">
      <h2 className="mb-6 text-lg font-semibold text-zinc-50">Career</h2>
      <ol className="flex flex-col gap-6">
        {career.map((entry) => (
          <li key={entry.org}>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:gap-4">
              <div>
                <h3 className="font-semibold text-zinc-100">{entry.org}</h3>
                {entry.context && (
                  <p className="text-sm text-zinc-500">{entry.context}</p>
                )}
              </div>
              {entry.dates && (
                <span className="shrink-0 text-sm text-zinc-500">
                  {entry.dates}
                </span>
              )}
            </div>
            {entry.note && (
              <p className="mt-1 text-zinc-400">{entry.note}</p>
            )}
            {entry.roles && (
              <ul className="mt-2 flex flex-col gap-1">
                {entry.roles.map((role) => (
                  <li
                    key={role.title}
                    className="flex flex-col sm:flex-row sm:justify-between sm:gap-4"
                  >
                    <span className="text-zinc-300">{role.title}</span>
                    <span className="shrink-0 text-sm text-zinc-500">
                      {role.dates}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ol>
    </section>
  );
}

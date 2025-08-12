type Project = {
    title: string;
    description: string;
  };
  
  const activeProjects: Project[] = [
    { title: "toc", description: "A customizable desktop chat and media app built in Go" },
    { title: "ahinson.dev", description: "This website built with React, TypeScript, and TailwindCSS - utilizing Vite for development" },

  ];

  const internalProjects: Project[] = [
    { title: "Grafana - Slack reporting tool", description: "Fullstack app built with Go that enables users to publish Grafana dashboards as reports to Slack on a schedule" },
    { title: "", description: "Another project description."}
  ];
  
  type ProjectSectionProps = {
    id: string;
    title: string;
    items: Project[];
  };

function  ProjectSection({ id, title, items }: ProjectSectionProps){
    return (
      <section
      id={id}
      className="text-left w-full flex gap-4 flex-col mt-4 py-4 border-t-2 border-zinc-800 rounded-e-md"
    >
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <ul className="space-y-6">
        {items.map((p, i) => (
          <li key={i}>
            <span className="text-lg font-semibold hover:underline">
              {p.title}
              <p className="italic">{p.description}</p>
              </span>
          </li>
        ))}
      </ul>
    </section>
  );
  }
  
export default function ProjectList() {
    return (
      <>
        <ProjectSection id="projects" title="Active Projects" items={activeProjects} />
        <ProjectSection id="internalProjects" title="Internal Projects" items={internalProjects} />
      </>
    );
}
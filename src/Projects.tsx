type Project = {
    title: string;
    description: string;
    link: string;
  };
  
  const activeProjects: Project[] = [
    { title: "toc", description: "A short description of your project.", link: "#" },
    { title: "Another Project", description: "Another project description.", link: "#" }
  ];

  const internalProjects: Project[] = [
    { title: "Grafana - Slack reporting tool", description: "A short description of your project.", link: "#" },
    { title: "", description: "Another project description.", link: "#" }
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
            <a href={p.link} className="text-lg font-semibold hover:underline">
              {p.title}
            </a>
            <p>{p.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
  }
  
export default function ProjectList() {
    return (
      <>
        <ProjectSection id="projects" title="Projects" items={activeProjects} />
        <ProjectSection id="internalProjects" title="Internal Projects" items={internalProjects} />
      </>
    );
}
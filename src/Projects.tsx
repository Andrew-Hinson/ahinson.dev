type Project = {
    title: string;
    description: string;
    link: string;
  };
  
  const projects: Project[] = [
    { title: "My App", description: "A short description of your project.", link: "#" },
    { title: "Another Project", description: "Another project description.", link: "#" }
  ];
  
  export default function ProjectList() {
    return (
      <section id="projects" className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">Projects</h2>
        <ul className="space-y-6">
          {projects.map((p, i) => (
            <li key={i}>
              <a href={p.link} className="text-lg font-semibold hover:underline">
                {p.title}
              </a>
              <p className="text-gray-600">{p.description}</p>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  
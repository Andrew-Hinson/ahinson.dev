type CareerItem = {
  company: React.ReactNode;
  title: React.ReactNode;
  product: React.ReactNode;
  date: React.ReactNode;
  description: React.ReactNode;
};

const careerItems: CareerItem[] = [
  {
    company: "Fetch -",
    title: "Data Engineer",
    product: "Streaming Data Platform",
    date: "2021 - 2025",
    description: "Kafka, Flink, Python, Go, Kubernetes, AWS, Terraform",
  },
  {
    company: "The AME Group -",
    title: "Service Technician",
    product: "IT Field and Remote Support",
    date: "2017 - 2019",
    description: "Network and Desktop Support",
  },
  {
    company: "U.S. Army -",
    title: "Infantry",
    product: "Louisiana National Guard",
    date: "2012 - 2018",
    description: "Specialist - Crew Served Weapons Squad",
  },
];

export default function Career() {
    return (
      <section className="text-left w-full flex gap-4 flex-col">
        <h2 className="text-2xl font-bold mb-4">Career</h2>
        {careerItems.map((item, index) => (
          <div key={index}>
            <div>
              <div className="min-w-full flex row justify-between hidden sm:flex">
                <div className="flex flex-row">
                  <h3 className="font-bold">{item.company}</h3>
                  <span className="mx-2 font-bold">{item.product}</span>
                  <i className="mx-2">{item.title}  </i>
                </div>
                <div>
                  <span>{item.date}</span>
                </div>
              </div>
              <span>{item.description}</span>
              <div className="flex flex-col sm:hidden justify-start">
                <div className="flex flex-row justify-start">
                  <h3 className="font-bold">{item.company}</h3>
                  <span className="mx-2 font-bold">{item.title}</span>
                  <span className="font-bold">{item.title}  </span>
                </div>
                <i>{item.title}</i>
                <div>
                  <span>{item.date}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </section>
    );
  }
  
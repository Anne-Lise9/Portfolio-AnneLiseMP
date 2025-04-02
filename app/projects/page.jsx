import ProtectedRoute from "../ProtectedRoute";

export default function ProjectsPage() {
  const projects = [
    {
      id: 1,
      title: "Examen UA1 et UA2",
      description: "Mon projet d'équipe dans le cadre du cours Programmation Web avancé",
      link: "https://github.com/AKameni1/client-examen",
    },
    {
      id: 2,
      title: "Give It Away",
      description: "Mon projet d'équipe dans le cadre du cours Projet Livrables en.",
      link: "https://github.com/jahswant/giveitaway",
    },
  ];

  return (
    <ProtectedRoute>
      <main className="flex flex-col items-center p-8">
        <h1 className="text-2xl font-semibold mb-4">Mes projets</h1>
        <ul className="w-full max-w-md flex flex-col gap-4">
          {projects.map((project) => (
            <li key={project.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mb-2">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Voir sur GitHub
              </a>
            </li>
          ))}
        </ul>
      </main>
    </ProtectedRoute>
  );
}

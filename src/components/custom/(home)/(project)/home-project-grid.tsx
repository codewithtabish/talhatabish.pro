import { getProjects } from "@/actions/projects";
import { ProjectPageCard } from "./home-project-card";

type Props = {
  locale?: string;
  isHome?: boolean;
};

export default async function ProjectsGrid({ locale = 'en', isHome = true }: Props) {
  const { data, error } = await getProjects(locale);

  if (error) {
    return (
      <div className="text-red-600 bg-red-50 p-4 rounded">
        Error loading projects: {error}
      </div>
    );
  }

  if (!data.length) {
    return <div className="text-gray-500">No projects found.</div>;
  }

  // Show only first 4 if isHome is true, otherwise show all
  const projectsToShow = isHome ? data.slice(0, 4) : data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projectsToShow.map((project) => (
        <ProjectPageCard
          key={project.id}
          title={project.title}
          slug={project.slug}
          shortDescription={project.shortDescription}
          imageUrl={ "https://d1d7s2thm5nyyd.cloudfront.net/project-card-image.webp"}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          techStacks={project.techStacks}
          isLive={project.isLive}
          isPublic={project.isPublic}
          locale={locale}
        />
      ))}
    </div>
  );
}

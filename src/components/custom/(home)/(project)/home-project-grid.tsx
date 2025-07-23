import { getProjects } from "@/actions/projects";
import HomeProjectCard from "./home-project-card";

type Props = {
  locale?: string;
};

export default async function ProjectsGrid({ locale = 'en' }: Props) {
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

  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-6">
      {data.map((project) => (
        <HomeProjectCard
          key={project.id}
          title={project.title}
          slug={project.slug}
          shortDescription={project.shortDescription}
          cardImages={project.cardImages} // Pass the comma-separated URLs
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
          techStacks={project.techStacks}
          isLive={project.isLive ? true : false}
          isPublic={project.isPublic ? true : false}
          locale={locale}
        />
      ))}
    </div>
  );
}

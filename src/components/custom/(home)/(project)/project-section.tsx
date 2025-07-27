import React from "react";
import ProjectsHomeSectionHeader from "./project-home-header";
import HomeProjectsGrid from "./home-project-grid";

const HomeProjectSection = ({
  locale = "en",
  isHome = true,
}: {
  locale: string;
  isHome: boolean;
}) => {
  return (
    <section
      className="
        w-full
        max-w-[100vw]
        sm:max-w-screen-sm
        md:max-w-screen-md
        lg:max-w-screen-lg
        xl:max-w-screen-xl
        2xl:max-w-screen-2xl
        mx-auto
        px-2
        sm:px-4
        md:px-8
        py-8
        sm:py-12
        md:py-16
        transition-all
      "
      id="projects"
    >
      {/* @ts-ignore */}
      <ProjectsHomeSectionHeader locale={locale} />
      <HomeProjectsGrid locale={locale} isHome={isHome} />
    </section>
  );
};

export default HomeProjectSection;

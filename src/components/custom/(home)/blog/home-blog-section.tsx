import React from "react";
import BlogSectionHeader from "./blog-section-header";
import BlogPageList from "../../(blog)/blog-page-list";

const HomeBlogSection = ({ locale = "en" }: { locale: string }) => {
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
      id="blogs"
    >
      <BlogSectionHeader locale={locale} />
      <BlogPageList locale={locale} />
    </section>
  );
};

export default HomeBlogSection;

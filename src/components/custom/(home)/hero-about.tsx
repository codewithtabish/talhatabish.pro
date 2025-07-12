import heroAbout from "@/utils/language-data/hero-about";
import ReactMarkdown from "react-markdown";

function AboutSection({ locale = "en" }) {
  // @ts-ignore
  return (
    <div className="leading-relaxed md:leading-loose text-base text-gray-700">
      <ReactMarkdown>{
        // @ts-ignore
      heroAbout[locale].content}</ReactMarkdown>
    </div>
  );
}

export default AboutSection;

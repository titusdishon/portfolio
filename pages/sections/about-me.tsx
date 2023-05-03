import Skills from "./skills/skills";
import Education from "./education/education";
import Certification from "./certification/certification";

export default function Summary() {
  return (
    <div className="container lg:w-6/12 p-10">
      <h5 className="text-4xl  w-1/2 my-6  bg-clip-text font-bold leading-snug hover:opacity-75">
        Skills
      </h5>
      <Skills />
      <h5 className="text-4xl  w-1/2 my-6  bg-clip-text font-bold leading-snug hover:opacity-75">
        Education
      </h5>
      <Education />
      <h5 className="text-4xl  w-1/2 my-6 bg-clip-text font-bold leading-snug hover:opacity-75">
        Professional Certifications
      </h5>
      <Certification />
    </div>
  );
}
